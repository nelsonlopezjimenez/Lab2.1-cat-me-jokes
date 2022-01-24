// Diana Kang 
// 1/23/2022
// Version 1.2

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
    res.send('Hello World')
})

app.get('/cat', function(req, res) {
    res.send("MEOW!");
})
  
app.get('/dog', function(req, res) {
    res.send("WOOF!");
})
  
app.get('/pig', function(req, res) {
    res.send("OINK!");
})


// Using Parameters in the URL argument

// Route /cat/10 to show the animal sound 10 times
app.get('/cat/:numberOfTimes', function (req, res) {
    let buildString = "";
    let numberOfTimes = req.params.numberOfTimes
    for (i = 0; i < numberOfTimes; i++) {
        buildString += "MEOW!"
    }
    res.send(buildString);
});

app.get('/dog/:animal', function(req, res) {
    let numOfTimes = req.params.numberOfTimes;
    let builString = "";
    for (let i = 0; i < numOfTimes; i++){
      builString += "WOOF!";
    }
    res.send(builString);
});

// Route looks like /pig/20 : output 20 "OINK "
app.get('/pig/:numberOfTimes', function (req, res) {
    let buildString = "";
    let numberOfTimes = req.params.numberOfTimes
    for (i = 0; i < numberOfTimes; i++) {
        buildString += "OINK!"
    }
    res.send(buildString);
});

// Route to pass a param with the req object
app.get('/:animal', function (req, res) {
    let buildString = "";
    if (req.params.animal == "dog") {
        buildString += "WOOF!"
        res.send(buildString);
    } else {
        res.send("The animal is not in our zoo!!")
    }
})

// Route to pass a param with the req object
app.get('/:animal', function (req, res) {
    let buildString = "";
    if (req.params.animal === "dog") {
        buildString += "WOOF!"
        res.send(buildString);}
    else if (req.params.animal === "cat") {
        buildString += "MEOW!"
        res.send(buildString);}
    else if (req.params.animal === "pig") {
        buildString += "OINK!"
        res.send(buildString);    
    } else {
        res.send("The animal is not in our zoo!")
    }
})

app.get('/:animal/:numberOfTimes', function (req, res) {
    let buildString = "";
    let sound = "";
    let animal = req.params.animal;
    let numberOfTimes = req.params.numberOfTimes;
    // if or switch statement to consider possible values of animal:cat, dog, pig
    if (animal === "cat") {    
        buildString ='MEOW!'; }
    else if (animal === "dog") {
        buildString ='WOOF!'; }
    else if (animal === "pig") {
        buildString ='OINK!'; 
    } else {
        res.send("The ${animal} is not in our zoo!"); }
    // for loop to iterate how many times the animal sound is repeated
    for(i = 0; i < numberOfTimes; i++) {
        buildString += sound; }
    res.send(buildString);
})  

app.listen(4444)

// Database Seeding
