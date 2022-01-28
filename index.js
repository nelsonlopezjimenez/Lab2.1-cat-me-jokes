// Elizabeth Hopper 1/24/22 version 2.0

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

// variables to be used in multiple routes
const pigSound = "OINK ";
const cowSound = "MOO ";
const dogSound = "WOOF ";
const catSound = "MEOW ";
const frogSound = "RIBBIT "

// route to pass param with the req object

app.get('/:animal', function (req, res) {
    let animalType = req.params.animal;
    if (animalType == "dog") {
        res.send(dogSound);
    } else if (animalType == "cat") {
        res.send(catSound);
    } else if (animalType == "pig") {
        res.send(pigSound);
    } else if (animalType == "cow") {
        res.send(cowSound);
    } else if (animalType == "frog") {
        res.send(frogSound);
    } else {
        res.send(animalType + " is not in our zoo!!")
    }
})
// Route to repeat animal sounds requested number of times

app.get('/:animal/:numberOfTimes', function (req, res) {
    let sound = "";
    let repeatedSound = "";
    let animalType = req.params.animal;
    let toRepeat = req.params.numberOfTimes;
    if (animalType == "dog") {
       sound += dogSound;
    } else if (animalType == "cat") {
       sound += catSound;
    } else if (animalType == "pig") {
       sound += pigSound;
    } else if (animalType == "cow") {
       sound += cowSound;
    } else if (animalType == "frog") {
       sound += frogSound;
    } else {
       res.send(animalType + " is not in our zoo!!")
    }
    for (i = 0; i < toRepeat; i++) {
      repeatedSound += sound + " ";
    }
    res.send(repeatedSound);

})


app.listen(4444)

// Database Seeding
