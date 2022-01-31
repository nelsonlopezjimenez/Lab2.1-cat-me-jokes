// Joseph Supples - Version 1.1 

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

app.get('/cat', function (req, res) {
    res.send("Meow")
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
app.get('/:animal', (req, res) => {
    let animal = req.params.animal;

    switch(animal) {
        case "cat":
            res.send('MEOW!! ');
            break;
        case "dog":
            res.send('Woof! ');
            break;
        case "pig":
            res.send('Oink! ');
            break;
        default:
            res.send(`${animal} is not in our zoo!`);
            break;
    }


  })  
  

// lets user input animal and number of times to repeat sound. IF animal is not cat,dog, or pigs, it says that the animal is not in zoo
  app.get('/:animal/:numberTimes', (req, res) => {
    let animal = req.params.animal;
    let numTimes = req.params.numberTimes;
    let response = "";
    let buildString = "";

    switch(animal) {
        case "cat":
            response = 'MEOW!! ';
            break;
        case "dog":
            response = 'Woof! ';
            break;
        case "pig":
            response = 'Oink! ';
            break;
        default:
            res.send(`${animal} is not in our zoo!`);
            break;
    }


    for(let i = 0; i < numTimes; i++)
    {
      buildString += response; 
    }

    res.send(buildString);
  })  
  


app.listen(4444)

// Database Seeding
