const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  // Dev environment
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'Lokcc',
        mongodb_password: 'yGg12NkXLbk67GRQ',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'next-blog-dev',
      },
    };
  }

  // Prod environment
  return {
    env: {
      mongodb_username: 'Lokcc',
      mongodb_password: 'yGg12NkXLbk67GRQ',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'next-blog-production',
    },
  };
};
