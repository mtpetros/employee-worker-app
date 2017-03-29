// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
// var path = require("path");


// Routes
// =============================================================
module.exports = function (app, passport) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    app.post('/login', 
        passport.authenticate('local-login', { failureRedirect: '/login' }),
        function(req, res) {
            res.redirect('/calendar');
        });

    app.get('/logout',
      function(req, res){
        req.logout();
        res.redirect('/');
      });

    // index route loads view.html
    app.get("/", function (req, res) {
        res.render("index");
    });

    app.get("/register", function (req, res) {
        res.render("registration");
    });


    app.get("/calendar",
        require('connect-ensure-login').ensureLoggedIn(),
        function (req, res) {
            console.log(req);
            res.render("calendar");
    });

    app.get("/login", function (req, res) {
        res.render("login");
    });



        

};
