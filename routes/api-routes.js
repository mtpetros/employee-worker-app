// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");
var passportConfig = require("../config/passport.js");


// Routes
// =============================================================
module.exports = function (app, passport) { //import user id from passport!!!!! create conditional!!!

  
    // PUT route for saving a new registration
    app.put("/register",
        passport.authenticate('local-signup'),
        function (req, res) {
            console.log("hey"+passportConfig.newUserId);
            db.User.update({
                name: req.body.name,
                // password: req.body.password,
                mode: req.body.mode,
                phone: req.body.phone,
                // email: req.body.email,
                street: req.body.street,
                city: req.body.city,
                zipcode: req.body.zipcode,
                skill: req.body.skill,
                availability: req.body.availability,

            },
            {
                where: {
                    id: passportConfig.newUserId
                }
            },
            {
                    timestamps: false            
            
    }).then(function (data) {
            db.User.findOne({
                where: {
                    id: passportConfig.newUserId
                }
            }).then(function (data) {
                var hbsObject = {
                    employer: data
                };
                res.render("registered", hbsObject);
            });
        });        
    });
    // Displays employer's information to a "confirmation page"
    app.get("/view/employers", function (req, res) {
        db.EmployerTable.findAll({}).then(function (data) {
            res.render("employertable", data);
        });            
    });    
    // Updates the availabity
    app.put("/calendar", function (req, res) {
        db.Post.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbPost) {
                res.json(dbPost);
            });
    });
    // Gets the information from employer to display on the calendar
    app.get("/view/calendar", function (req, res) {
        var query = {};
        if (req.query.id) {
            query.User = req.query.id;
        }
        db.EmployerDates.findAll({
            where: query
        }).then(function (data) {
            res.render("calendarView", data);
        })
    })

};
