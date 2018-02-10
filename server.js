const express = require('express'),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    routes = require("./controllers/auth.js"),
    app = express(),
    port = process.env.PORT || 5000,
    db = require('./models'),
    logger = require('morgan'),
    session = require('express-session'),
    passport = require('./config/passport');



app.use(express.static("public"));
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.text());

// // Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

app.use((req, res, next) => {
    res.status(404)
    res.render("error")
});


app.listen(port, () => console.log(`==> 🌎 Listening on PORT ${port}. Visit http://localhost:${port}`));