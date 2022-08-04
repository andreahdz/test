import {
  defineConfig,
  CookieSessionStorage,
  PerformanceMetricsServerAnalyticsConnector,
} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: () => ({
    defaultLanguageCode: 'EN',
    defaultCountryCode: 'US',
    storeDomain: 'trial-store-for-andrea.myshopify.com',
    storefrontToken: '2087290fc6acea152e869c3b2f659b28',
    storefrontApiVersion: '2022-07',
  }),
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
  serverAnalyticsConnectors: [PerformanceMetricsServerAnalyticsConnector],
});
