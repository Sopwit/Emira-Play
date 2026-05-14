function buildInlineKeyboard(config) {
  if (!config.telegramWebAppUrl) return undefined;

  return {
    inline_keyboard: [
      [
        {
          text: 'Open Emira',
          web_app: {
            url: config.telegramWebAppUrl,
          },
        },
      ],
      [
        {
          text: 'Open in Browser',
          url: config.telegramLaunchUrl ?? config.telegramWebAppUrl,
        },
      ],
    ],
  };
}

function startMessage() {
  return [
    'Welcome to Emira.',
    '',
    'Emira is a Telegram Mini App built on Stellar.',
    '',
    'Tap the button below to open the app and explore the experience.',
  ].join('\n');
}

function appMessage() {
  return 'Open Emira Mini App from the button below.';
}

function helpMessage() {
  return [
    'Emira is a Telegram Mini App built on Stellar.',
    '',
    'Use /app to launch the Mini App.',
    'Use /start to open the welcome flow.',
  ].join('\n');
}

export function buildTelegramCommandResponse(command, config) {
  const normalized = String(command ?? '').trim().toLowerCase().split(/\s+/)[0]?.split('@')[0] ?? '';
  const replyMarkup = buildInlineKeyboard(config);

  if (normalized === '/start') {
    return {
      text: startMessage(),
      reply_markup: replyMarkup,
    };
  }

  if (normalized === '/app') {
    return {
      text: appMessage(),
      reply_markup: replyMarkup,
    };
  }

  if (normalized === '/help') {
    return {
      text: helpMessage(),
      reply_markup: replyMarkup,
    };
  }

  return null;
}

export async function sendTelegramMessage({ token, chatId, text, replyMarkup }) {
  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      reply_markup: replyMarkup,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Telegram sendMessage failed (${response.status}): ${body}`);
  }

  return response.json();
}
