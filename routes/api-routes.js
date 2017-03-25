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
    app.post("/register", function (req, res) {
        console.log(req.body);
        db.User.create({
            name: req.body.name,
            mode: req.body.mode,
            phone: req.body.phone,
            email: req.body.email,
            street: req.body.street,
            city: req.body.city,
            zipcode: req.body.zipcode,
            skill: req.body.skill,
            availability: req.body.availability,

        }, {
                timestamps: false
            
            
    }).then(function (data) {
            console.log("+++++++++++++" + data);
            var hbsObject = {
                employer: data
            };
            res.render("registered", hbsObject);
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
