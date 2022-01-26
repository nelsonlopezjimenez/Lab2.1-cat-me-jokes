// Tung Nguyen
// 01/25/2022
// v.1.0

const express = require('express')
const app = express()
const mongoose = require('mongoose');

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('/public'));
app.set('view engine', 'ejs');

// Database Server MongoDb Setup

mongoose.connect('mongodb://localhost/colt-wieruch-todo-list',
    { useNewUrlParser: true });
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
    return res.send('Hello World');
})

app.get('/cat', function (req, res) {
    return res.send("MEOW!!!");
})

// Using Parameters in the URL argument

// Route /cat/10 to show the animal sound 10 times

app.get('/cat/:numberOfTimes', function (req, res) {
    let buildString = "";
    let numberOfTimes = req.params.numberOfTimes

    for (i = 0; i < numberOfTimes; i++) {
        buildString += "MEOW "
    }
    return res.send(buildString);
});

// Route to pass a param with the req object

app.get('/:animal', function (req, res) {
    let animal = (String(req.params.animal) || "invalid-animal");

    switch (animal){
        case "dog":
            return res.send("WOOF!!!");
        case "pig":
            return res.send("OINK!!!");
        default:
            return res.send("The animal is not in our zoo!!!");
    }
})

// * TODO week2 topic 1 PLEASE COMPLETE!!!!*
// Route looks like /pig/20 : output 20 "OINK "

app.get('/:animal/:numberOfTimes', function (req, res) {
    let animal          = (String(req.params.animal) || "invalid-animal"),
        numberOfTimes   = (parseInt(req.params.numberOfTimes) || 0);

    switch (animal){
        case "dog":
            return res.send("WOOF ".repeat(numberOfTimes));
        case "pig":
            return res.send("OINK ".repeat(numberOfTimes));
        default:
            return res.send("The animal is not in our zoo!!!");
    }
})

app.listen(4444)

// Database Seeding
