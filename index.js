// jason beutler

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


app.get('/:animal', function (req, res) {
    let buildString = "";
    if (req.params.animal == "dog") {
        buildString += "WOOF"
        res.send(buildString);
    } else if (req.params.animal == "cat") {
        buildString += "MEOW"
        res.send(buildString);
    } else if (req.params.animal == "pig") {
        buildString += "OINK"
        res.send(buildString);
    }else {
        res.send(req.params.animal + " is not in our zoo!!")
    }
})

// * TODO week2 topic 1 PLEASE COMPLETE!!!!*
// Route looks like /pig/20 : output 20 "OINK "

app.get('/:animal/:numberOfTimes', function (req, res) {
    let buildString = "";
    let animal  = req.params.animal;
    let numberOfTimes = req.params.numberOfTimes 
    if (req.params.animal == "dog") {
        for (i = 0; i < numberOfTimes; i++) {
            buildString += "WOOF "
        }
        res.send(buildString);
    } else if (req.params.animal == "cat") {
        for (i = 0; i < numberOfTimes; i++) {
            buildString += "MEOW "
        }
        res.send(buildString);
    } else if (req.params.animal == "pig") {
        for (i = 0; i < numberOfTimes; i++) {
            buildString += "OINK "
        }
        res.send(buildString);
    }else {
        res.send(animal + " is not in our zoo!!")
    }
})

app.listen(4444)

// Database Seeding
