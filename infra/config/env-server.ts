import "server-only";

/* Email */
export const EMAIL_HOST = process.env.EMAIL_HOST;
export const EMAIL_USER = process.env.EMAIL_USER;
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

/* Monitoring */
export const SENTRY_AUTH_TOKEN = process.env.SENTRY_AUTH_TOKEN;
export const SENTRY_ORG = process.env.SENTRY_ORG;
export const SENTRY_PROJECT = process.env.SENTRY_PROJECT;
export const SENTRY_TUNNEL_ROUTE = process.env.SENTRY_TUNNEL_ROUTE;
