'use strict';
const mongoose = require('mongoose');
const Mail = mongoose.model('Mail');

module.exports = server =>
{
  server.get('/', async (_, res) =>
  {
     const m = new Mail({
         subject: 'Hello Subj',
         receiver: 'test@test.com',
         content: 'Hello content'
     });

     await m.save();

      res.send('Worked');
  });
};
