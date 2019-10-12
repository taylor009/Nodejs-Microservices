const path = require('path');

const basePath = path.join(__dirname, '/packages');

module.exports = {
    apps: [
        // API Gateway Service
        {
            name: 'Gateway',
            script: basePath + '/gateway/server.js',
            watch: true,
            // exec_mode: "cluster",
            env: {
                NODE_ENV: 'development',
                PORT: 3001,
                SERVICE_DB_PORT: 4001,
                Q_URI:
                    'cloudAMQP'
            }
        },
        //DB Service
        {
            name: 'DB Service',
            script: basePath + '/database_service/server.js',
            watch: true,
            env: {
                NODE_ENV: 'development',
                PORT: 4001
            }
        },
        // Mailing Service
        {
            name: 'Mailing Service',
            script: basePath + '/mailing_service/index.js',
            watch: true,
            env: {
                NODE_ENV: 'development',
                MJ_API_PUBLIC: 'Mailjet Pub',
                MJ_API_SECRET: 'Mailjet Secret',
                Q_URI:
                    'cloudAMQP'
            }
        }
    ],
};
