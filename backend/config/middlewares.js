module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: false,
      crossOriginOpenerPolicy: false,
      crossOriginOpenerPolicy: false,
      originAgentCluster: false,
      contentSecurityPolicy: false,
      xssFilter: false,
      hsts: false,
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
];
