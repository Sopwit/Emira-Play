import { createRuntimeConfig } from '../backend/src/config.mjs';
import { handleRoute } from '../backend/src/routes.mjs';

export default async function handler(request, response) {
  const runtimeConfig = createRuntimeConfig();
  const defaultErrorMessage = runtimeConfig.isProduction ? 'Internal server error' : 'Unknown backend error';
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
}
