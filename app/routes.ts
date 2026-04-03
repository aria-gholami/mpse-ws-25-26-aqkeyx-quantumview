import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
    index('screens/home.tsx'),
    route('/hybridize-key-service', './screens/hybridizeKeyService.tsx'),
    route('/quantum-key-distribution', './screens/quantumKeyDistribution.tsx'),
    route('/contact', './screens/contact.tsx'),
    route('/news', './screens/news.tsx'),
    route('/related-works', './screens/relatedWorks.tsx'),
    route('/imprint', './screens/imprint.tsx'),
    route('/data-privacy-policy', './screens/dataPrivacyPolicy.tsx'),
] satisfies RouteConfig;
