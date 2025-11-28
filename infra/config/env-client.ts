/* Helpers */
export const isProd = process.env.NODE_ENV === "production";
export const isDev = process.env.NODE_ENV === "development";
export const isClient = typeof window !== "undefined";

/* App */
export const SITE_URL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
export const SITE_NAME = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
export const ASSETS_URL = process.env.NEXT_PUBLIC_ASSETS_URL;

/* Analytics */
export const ANALYTICS_ENABLED = process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true";
export const REPLAY_ENABLED = process.env.NEXT_PUBLIC_REPLAY_ENABLED === "true";

// Umami
export const UMAMI_SRC = process.env.NEXT_PUBLIC_UMAMI_SRC;
export const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

/* Monitoring */
export const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;
