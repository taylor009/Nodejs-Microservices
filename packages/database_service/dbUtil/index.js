'use strict';
const mongoose = require('mongoose');


module.exports = config =>
{
    mongoose.Promise = global.Promise;
    mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

    console.log(mongoose.connection);
};
