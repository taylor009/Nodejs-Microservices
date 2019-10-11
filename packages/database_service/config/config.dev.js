'use strict';
const {PORT} = process.env;

module.exports = {
  port: PORT || 4000,
  mongoURI: 'mongodb+srv://taylor:<password>@cluster0-rsvzs.mongodb.net/test?retryWrites=true&w=majority'
};
