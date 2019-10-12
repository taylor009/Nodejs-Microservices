'use strict';
const {PORT, Q_URI} = process.env;

module.exports = {
    port: PORT || 5000,
    q: {
        uri: Q_URI || 'NO HARD CODING HERE'
    }
};
