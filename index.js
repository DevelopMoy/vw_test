require('dotenv').config();
const Server = require(__dirname+'/models/server');

const mainServer = new Server(process.env.PORT);
mainServer.listen();