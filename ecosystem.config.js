const path = require('path');

const basePath = path.join(__dirname, '/packages');

module.exports = {
  apps : [
      {
        name: 'Gateway',
        script: basePath + '/gateway/server.js',
        env: {
            NODE_ENV: 'development',
            PORT: 3001
        }
      },
    {
      name: 'DB Service',
      script: basePath + '/database_service/server.js',
      env: {
        NODE_ENV: 'development',
        PORT: 4001
      }
    }
  ],
};
