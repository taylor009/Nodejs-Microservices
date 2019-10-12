const path = require('path');

const basePath = path.join(__dirname, '/packages');

module.exports = {
  apps : [
      {
        name: 'Gateway',
          script: basePath + '/gateway/server.js',
          watch: true,
          env: {
              NODE_ENV: 'development',
              PORT: 3001,
              SERVICE_DB_PORT: 4001,
              Q_URI:
                ''
          }
      },
    {
      name: 'DB Service',
        script: basePath + '/database_service/server.js',
        watch: true,
        env: {
            NODE_ENV: 'development',
            PORT: 4001
        }
    }
  ],
};
