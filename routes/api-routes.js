// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  
    // POST route for saving a new registration
    app.post("/api/registration", function (req, res) {
        console.log(req.body);
        db.User.create({
            name: req.body.name,
            mode: req.body.mode,
            phone: req.body.phone,
            email: req.body.email,
            street: req.body.street,
            city: req.body.city,
            zipCode: req.body.zipCode,
            skill: req.body.skill,
            availability: req.body.availability,

        }, {
                timestamps: false
            
            
    }).then(function (data) {
            console.log("hey hey" + JSON.stringify(data));
            //res.render("registered", data.values);
        });        
    });

    app.get("/view/employers", function (req, res) {
        db.EmployerTable.findAll({}).then(function (data) {
            res.render("employertable", data);
        });            
    });    
};
