import { isProd, REPLAY_ENABLED, SENTRY_DSN } from "./infra/config/env-client";

type CaptureFn = (...args: any[]) => void;

let _captureRouterTransitionStart: CaptureFn = () => {}; // no-op
export const onRouterTransitionStart: CaptureFn = (...args) =>
  _captureRouterTransitionStart(...args);

const init = async () => {
  const Sentry = await import("@sentry/nextjs");

  Sentry.init({
    dsn: SENTRY_DSN,

    integrations: REPLAY_ENABLED
      ? [Sentry.replayIntegration({ maskAllText: true, maskAllInputs: true })]
      : [],

    tracesSampleRate: isProd ? 0.1 : 1.0,
    replaysSessionSampleRate: isProd ? 0.05 : 1.0,
    replaysOnErrorSampleRate: 1.0,

    debug: !isProd,
    sendDefaultPii: false,

    beforeSend(event) {
      if (event.user) event.user = undefined;
      if (event.request?.headers) {
        delete event.request.headers["X-Forwarded-For"];
        delete event.request.headers.REMOTE_ADDR;
      }
      if (event.contexts?.device) {
        delete event.contexts.device.ip_address;
      }
      return event;
    },
  });

  _captureRouterTransitionStart = Sentry.captureRouterTransitionStart;
};

// On diffère volontairement (idle ou timeout)
if ("requestIdleCallback" in window) {
  window.requestIdleCallback(init);
} else {
  setTimeout(init, 200);
}
