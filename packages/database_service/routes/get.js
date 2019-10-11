'use strict';
module.exports = server =>
{
  server.get('/', (_, res) =>
  {
     res.send('Hello from teh database');
  });
};
