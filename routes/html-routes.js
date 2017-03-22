// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
// var path = require("path");
var registration = require('..models/registration.js');
var employerTable = require('..models/employerTable.js');

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function (req, res) {
        res.render("index");
    });

    app.get("/register", function (req, res) {
        res.render("registration");
    });

    app.post("/register", function (req, res) {
        registration.create({
            name: req.body.name,
            mode: req.body.mode,
            phone: req.body.phone,
            email: req.body.email,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            skill: req.body.skill,
            availability: req.body.availability
        }).success(function (data) {
            res.render("registered", data.values);
        });        
    });


    // renders the employer table view
    app.get("/view/employers", function (req, res) {
        employerTable.findAll({}).then(function (data) {
            res.render("employertable", data);
        });            
    });        

};
