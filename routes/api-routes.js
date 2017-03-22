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
        db.Login.create({
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
           

        }), {
                timestamps: false
            }
            
    });



    // DELETE route for deleting posts
    app.delete("/api/posts/:id", function (req, res) {
        db.Post.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    // PUT route for updating posts
    app.put("/api/posts", function (req, res) {
        db.Post.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
};
