const express = require('express');
const cors = require ('cors');
const vwRoutes = require('../routes/vw.routes');

class Server {

    constructor (port){
        this.app=express();
        this.port=port;
        this.usersEndPoint = "/api/claims/";

        // MIDDLEWARES
        this.middlewares();
        // APP ROUTING
        this.assignRoutes();
        console.log("APP LISTENING AT PORT "+port);
    }

    middlewares(){ // Middlewares globales
        // CORS
        this.app.use(cors());
        // READ AND PARSE
        this.app.use(express.json());
    }

    assignRoutes (){ // Assign endpoint´s routes
        this.app.use(this.usersEndPoint,vwRoutes);
    }

    listen (){
        this.app.listen(this.port);
    }
}

module.exports = Server;