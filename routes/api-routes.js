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

    //############################################################## REGISTRATION ####################
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
            rating: req.body.rating,
            availability: req.body.availability,

        }, {
                timestamptimestamps: false
            }).then(function (userData) {          
            res.json(userData);
        });
    });
}