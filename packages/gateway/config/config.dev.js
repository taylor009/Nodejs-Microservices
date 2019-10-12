'use strict';
const {PORT, SERVICE_DB_PORT, Q_URI} = process.env;

module.exports = {
  port: PORT || 3000,
  serviceDatabase: {
    port: SERVICE_DB_PORT || 4000
  },
  q: {
    uri: Q_URI || 'amqp://jsvibydg:UMx-2ByfjIzmWdcrmyICOCS1T8yMTjb1@porpoise.rmq.cloudamqp.com/jsvibydg'
  }
};
