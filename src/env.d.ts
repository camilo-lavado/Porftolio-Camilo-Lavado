/// <reference path="../.astro/types.d.ts" />

declare module '@vercel/speed-insights/astro' {
  const SpeedInsights: any;
  export default SpeedInsights;
}

declare module '@vercel/analytics/astro' {
  const Analytics: any;
  export default Analytics;
}
