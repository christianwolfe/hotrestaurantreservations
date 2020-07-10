// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();

//port for heroku
let PORT = process.env.PORT || 3000

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// reservations (DATA)
// =============================================================
var reservations = [
    {
        routeName: "Smith",
        name: "John Smith",
        role: "Jedi Master",
        age: 900,
        forcePoints: 2000
    },

];

var waitList = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays all reservations
app.get("/tables", function (req, res) {
    return res.json.reservations[i];
});

// Displays a single character, or returns false
app.get("/tables", function (req, res) {
    var tables = req.params.character;

    console.log(chosen);

    for (var i = 0; i <= 5; i++) {
        if (chosen === reservations[i].routeName) {
            return res.json.reservations[i];
        }
    }

    return res.json(false);
});

// Create New reservations - takes in JSON input
app.post("/reservations", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;

    // Using a RegEx Pattern to remove spaces from newReservation
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);
    function whichList() {
        if (reservations.length < 5) {

            reservations.push(newReservation);
        }
        else {
            waitList.push(newReservation);
        }

        res.json(newReservation);
    }
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
