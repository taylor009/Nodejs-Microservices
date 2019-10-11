const server     = require('express')();
const bodyParser = require('body-parser');
const morgan     = require('morgan');

const config = require('./config');
const {port} = config;

server.use(bodyParser.json());
server.use(morgan('dev'));

require('./dbUtil')(config);
require('./routes/get')(server);

server.listen(port, () => console.log(`Listening on port ${port}`));
