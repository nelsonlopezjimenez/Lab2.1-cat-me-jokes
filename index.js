/*
  John O'Hara
  Lab 2.1 - Version 1.0.0
  1/21/2022

  I gutted some of the unnecessary code to avoid any issues from modules that aren't
  used in this assignment. I also renamed the existing package.json and package-lock.json 
  files to the 'verdaccio-' versions of each and initialiazed a new project to 
  avoid the errors npm was giving me without a local verdaccio repo set up.
*/

import express, { urlencoded } from 'express';

const app = express();

// Built-In Middleware
app.use(urlencoded({ extended: true }));

// Object to represent our animals as an array holding their sound and face
const zoo = {
  bear:   ["roar",    "🐻"],
  bee:    ["buzz",    "🐝"],
  bird:   ["tweet",   "🐦"],
  cat:    ["meow",    "🐱"],
  cow:    ["moo",     "🐮"],
  dog:    ["woof",    "🐕"],
  frog:   ["ribbit",  "🐸"],
  horse:  ["neigh",   "🐴"],
  mouse:  ["squeak",  "🐭"],
  pig:    ["oink",    "🐷"],
  sheep:  ["baaah",   "🐑"],
};

const zooAnimals = Object.keys(zoo);


//  ----------------
//  Helper Functions
//  ----------------
const getFace  = (animal) => zoo[animal][1];

const getSound = (animal) => zoo[animal][0].toUpperCase(); 

const getAnimalString = (animal, numberOfTimes) => 
  zooAnimals.includes(animal.toLowerCase()) ? 
    `${getFace(animal)} - ${`${getSound(animal)} `.repeat(numberOfTimes).trim()}!` :
    `The ${animal} isn't in the zoo!`;

const getAnimalChoices = () => `Available animals are: ${zooAnimals.join(", ")}`;

//  ------    
//  Routes
//  ------    

// Route to print instructions
app.get('/', (req, res) => 
  res.send("Append an animal name, a forward slash, and a number to the URL! " +
           "All animals can be viewed at /zoo."));

// Route to display zoo choices
app.get('/zoo', (req, res) => res.send(getAnimalChoices()));

// Route for main functionality
app.get('/:animal/:numberOfTimes', (req, res) => {
  let { animal, numberOfTimes } = req.params;
  res.send(getAnimalString(animal, numberOfTimes));
});

// fallback if number is omitted
app.get('/:animal', (req, res) => 
  res.send(getAnimalString(req.params.animal.toLowerCase(), 1)));

app.listen(4444);
