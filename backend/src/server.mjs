import http from 'node:http';
import { createRuntimeConfig } from './config.mjs';
import { handleRoute } from './routes.mjs';

const port = Number(process.env.PORT ?? 8080);
const runtimeConfig = createRuntimeConfig();
const defaultErrorMessage = runtimeConfig.isProduction ? 'Internal server error' : 'Unknown backend error';

const server = http.createServer(async (request, response) => {
  try {
    await handleRoute(request, response, runtimeConfig);
  } catch (error) {
    response.writeHead(500, {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    });
    response.end(
      JSON.stringify({
        error: runtimeConfig.isProduction ? defaultErrorMessage : error instanceof Error ? error.message : defaultErrorMessage,
      }),
    );
  }
});

server.listen(port, () => {
  console.log(`Emira backend listening on http://localhost:${port} (${runtimeConfig.nodeEnv})`);
});
