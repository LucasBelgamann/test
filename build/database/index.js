"use strict";
exports.__esModule = true;
var express = require("express");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    };
    Server.prototype.routes = function () {
        this.app.get('/', function (req, res) {
            res.send('Hello World!');
        });
    };
    Server.prototype.start = function () {
        this.app.listen(3000, function () {
            console.log('Server listening on port 3000');
        });
    };
    return Server;
}());
var server = new Server();
server.start();
