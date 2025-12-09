// analytics.ts
export const enableAdsTracking = () => {
  if (typeof window === "undefined" || !(window as any).gtag) return;
  const gtag = (window as any).gtag;
  gtag("js", new Date());
  gtag("config", "AW-17729834016");
};
