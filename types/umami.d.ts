export type AnalyticsPayload = {
  label?: string;
  location?: string;
  id?: string;
  value?: number;
};

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, data?: AnalyticsPayload) => void;
    };
  }
}
