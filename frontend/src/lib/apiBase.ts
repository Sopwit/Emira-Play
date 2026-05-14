function trimTrailingSlash(value: string) {
  return value.endsWith('/') ? value.slice(0, -1) : value;
}

function isLocalAddress(value: string) {
  return /(^|\/\/)(localhost|127\.0\.0\.1|0\.0\.0\.0)(:\d+)?(\/|$)/i.test(value);
}

export function resolveApiBaseUrl() {
  const configured = import.meta.env.VITE_API_BASE_URL?.trim();
  if (configured) {
    if (import.meta.env.PROD && isLocalAddress(configured)) {
      return '/_/backend';
    }
    return trimTrailingSlash(configured);
  }

  if (import.meta.env.PROD) {
    return '/_/backend';
  }

  return '';
}

export const apiBaseUrl = resolveApiBaseUrl();
