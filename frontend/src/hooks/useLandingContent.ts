import { useEffect, useState } from 'react';
import { getFallbackContent } from '../data/fallbackContent';
import { apiBaseUrl } from '../lib/apiBase';
import type { LandingContent, Locale } from '../types/content';

export function useLandingContent(locale: Locale) {
  const [content, setContent] = useState<LandingContent>(getFallbackContent(locale));

  useEffect(() => {
    let active = true;

    const fetchContent = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/api/v1/content?locale=${locale}`);
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const data = (await response.json()) as LandingContent;
        if (active) {
          setContent(data);
        }
      } catch {
        if (active) {
          setContent(getFallbackContent(locale));
        }
      }
    };

    void fetchContent();

    return () => {
      active = false;
    };
  }, [locale]);

  return content;
}
