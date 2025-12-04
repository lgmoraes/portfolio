import Script from "next/script";
import {
  ANALYTICS_ENABLED,
  UMAMI_SRC,
  UMAMI_WEBSITE_ID,
} from "@/infra/config/env-client";
import type { AnalyticsPayload } from "@/types/umami";

function AnalyticsScript() {
  return (
    <Script
      src={UMAMI_SRC}
      data-website-id={UMAMI_WEBSITE_ID}
      strategy="afterInteractive"
    />
  );
}

export default function Analytics() {
  if (ANALYTICS_ENABLED) return <AnalyticsScript />;
  return null;
}

export const track = (name: string, payload?: AnalyticsPayload) => {
  window.umami?.track(name, payload);
};
