"use strict";
exports.__esModule = true;
var express = require("express");
var routesLogin_1 = require("./database/routes/routesLogin");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.config();
        this.routes();
    }
    App.prototype.config = function () {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use('/login', routesLogin_1["default"]);
    };
    App.prototype.routes = function () {
        this.app.get('/', function (req, res) {
            res.send('Hello World!');
        });
    };
    App.prototype.start = function () {
        this.app.listen(3000, function () {
            console.log('App listening on port 3000');
        });
    };
    return App;
}());
var app = new App();
app.start();
