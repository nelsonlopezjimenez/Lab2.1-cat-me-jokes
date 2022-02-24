// Joshua Bordallo 1/21/2022 version 1.0.0 !!!!

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("/public"));
app.set("view engine", "ejs");

// Database Server MongoDb Setup

// mongoose.connect('mongodb://localhost/colt-wieruch-todo-list',
//     { useNewUrlParser: true });
// // Setup the Model
// const todoSchema = new mongoose.Schema({
//     title: String,
//     isChecked: { type: Boolean, default: false },
//     date: { type: Date, default: new Date() }
// });

//const todoModel = mongoose.model("Todo", todoSchema);

// Custom Middleware

// Routes

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/cat", function (req, res) {
  res.send("MEOW!!");
});

// Using Parameters in the URL argument

// Route /cat/10 to show the animal sound 10 times

app.get("/cat/:numberOfTimes", function (req, res) {
  let buildString = "";
  let numberOfTimes = req.params.numberOfTimes;

  for (i = 0; i < numberOfTimes; i++) {
    buildString += "MEOW ";
  }
  res.send(buildString);
});

// Route to pass a param with the req object

app.get("/:animal", function (req, res) {
  let buildString = "";
  let animal = req.params.animal;
  if (animal == "dog") {
    res.send("WOOF");
  } else if (animal == "cat") {
    res.send("MEOW");
  } else if (animal == "pig") {
    res.send("OINK");
  } else {
    res.send(`${animal} not in zoo`);
  }
});

// * TODO week2 topic 1 PLEASE COMPLETE!!!!*
// Route looks like /pig/20 : output 20 "OINK "

app.get("/:animal/:numberOfTimes", function (req, res) {
  let buildString = "";
  let animal = req.params.animal;
  let number = req.params.numberOfTimes;

  if (animal == "dog") {
    buildString = "WOOF";
  } else if (animal == "cat") {
    buildString = "MEOW";
  } else if (animal == "pig") {
    buildString = "OINK";
  } else {
    buildString = `${animal} not in zoo`;
  }

 let sound = ""; 
  for (i = 0; i < number; i++) {
    sound += " " + buildString;
  }
  res.send(sound);
});

app.listen(4444);
// Database Seeding
