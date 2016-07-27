/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'jd-frontend',
    environment: environment,
    baseURL: '/',
    locationType: 'history',
    apiDomain: process.env.DOMAIN_API,
    apiNamespace: process.env.API_NAMESPACE,
    EmberENV: {
      FEATURES: {
      }
    },

    APP: {
    }
  };

  if (environment === 'development') {
  }

  if (environment === 'test') {
    ENV.baseURL = '/';
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.googleAnalytics = {
      webPropertyId: process.env.GOOGLE_ANALYTICS_ID,
      tracker: 'ga.js'
    };
  }

  return ENV;
};
