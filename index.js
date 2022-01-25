// Ashray Thapa, 01/24/2022, Version 1

const express = require('express')
const app = express()
const mongoose = require('mongoose');

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('/public'));
app.set('view engine', 'ejs');

// Database Server MongoDb Setup

mongoose.connect('mongodb://localhost/colt-wieruch-todo-list', { useNewUrlParser: true });
// Setup the Model
const todoSchema = new mongoose.Schema({
    title: String,
    isChecked: { type: Boolean, default: false },
    date: { type: Date, default: new Date() }
});

const todoModel = mongoose.model("Todo", todoSchema);

// Custom Middleware

// Routes

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/cat', function (req, res) {
    res.send("MEOW, MEOW!!")
})

// Using Parameters in the URL argument

// Route /cat/10 to show the animal sound 10 times

app.get('/cat/:numberOfTimes', function (req, res) {
    let buildString = "";
    let numberOfTimes = req.params.numberOfTimes

    for (i = 0; i < numberOfTimes; i++) {
        buildString += "MEOW "
    }
    res.send(buildString);
});

// Route to pass a param with the req object

app.get('/:animal', function (req, res) {
    let buildString = "";
    if (req.params.animal == "dog") {
        buildString += "WOOF "
        res.send(buildString);
    } else {
        res.send("The animal is not in our zoo!!")
    }
})

// * TODO week2 topic 1 PLEASE COMPLETE!!!!*
// Route looks like /pig/20 : output 20 "OINK "

app.get('/:animal/:numberOfTimes', function(req, res) {
    let buildString = "";

    // Add the params from the req object: syntax - req.params.animal
    //                                     syntax - req.params.numberOfTimes
    let animal  = req.params.animal;
    let numberOfTimes = req.params.numberOfTimes 

    // if or switch statement to consider possible values of animal:cat, dog, pig
    switch (animal){
        case "dog":
            for (i = 0; i < numberOfTimes ; i++) {
                buildString += "WOOF "
            };
            break;
        case "cat":
            for (i = 0; i < numberOfTimes ; i++) {
                buildString += "MEOW "
            };
            break;
        case "pig":
            for (i = 0; i < numberOfTimes ; i++) {
                buildString += "OINK "
            };
            break;
        default:
            buildString += `The ${animal} is not in our zoo`;

    }

    res.send(buildString);
})

app.listen(4444)

// Database Seeding
