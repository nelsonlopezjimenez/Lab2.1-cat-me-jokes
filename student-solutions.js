/* Pseudocode
1. declare and initialize variables to hold name and number of repetitions
2. if name is cat, output animal sound "MEOW"
3. otherwise if name is dog, output animal sound "WOOF"
4. otherwise if name is pig, output animal sound "OINK"
5. Otherwise, if name does not exist, output "Sorry, name is not in our zoo"
6a. Create an object string to build the final result and initialize to empty string
6. Create and initialize looping structure
7. In every loop add animal sound to the building string until number of repetitions is reached
8. Close the looping structure
9. Send the result to render in a web page
*/
let numberOfTimes = req.params.numberOfTimes
let animal = req.params.animal
if (req.params.animal == "dog") {
    for (i = 0; i < numberOfTimes; i++) {
        buildString += "WOOF "
    }
    res.send(buildString)
} else if (req.params.animal == 'pig') {
    for (i = 0; i < numberOfTimes; i++) {
        buildString += "OINK "
    }
    res.send(buildString)
} else {
    res.send(`The animal \"${animal}\"is not in our zoo!!`)
}

// ==========================


if (animal == "cat") {
    response = 'MEOW!! ';
}
else if (animal == "dog") {
    response = 'Woof! ';
}
else if (animal == "pig") {
    response = 'Oink! ';
}
else {
    res.send(`${animal} is not in our zoo!`);
}

// * TODO week2 topic 1 PLEASE COMPLETE!!!!*
// Route looks like /pig/20 : output 20 "OINK "
for (let i = 0; i < numTimes; i++) {
    buildString += response;
}

// ========================
// =================================

let animal = req.params.animal;
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
} else {
    res.send(animal + " is not in our zoo!!")
}

//====================

let animal = req.params.animal.toLowerCase();
let numberOfTimes = req.params.numberOfTimes
//if or switch statement to consider possible values of animal:cat, dog, pig
switch (animal) {
    case "cat":
        for (i = 0; i < numberOfTimes; i++) {
            buildString += "MEOW "
        };
        break;
    case "dog":
        for (i = 0; i < numberOfTimes; i++) {
            buildString += "WOOF "
        };
        break;
    case "pig":
        for (i = 0; i < numberOfTimes; i++) {
            buildString += "Oink "
        };
        break;
    default:
        buildString += `The ${animal} is not in our zoo`;
}
res.send(buildString);

// ================================

if (animal === "cat") {
    buildString = 'MEOW!';
}
else if (animal === "dog") {
    buildString = 'WOOF!';
}
else if (animal === "pig") {
    buildString = 'OINK!';
} else {
    res.send("The ${animal} is not in our zoo!");
}
// for loop to iterate how many times the animal sound is repeated
for (i = 0; i < numberOfTimes; i++) {
    buildString += sound;
}
res.send(buildString);

// ==============================

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

// ===================================

switch (animal) {
    case "dog":
        for (i = 0; i < numberOfTimes; i++) {
            buildString += "WOOF "
        };
        break;
    case "cat":
        for (i = 0; i < numberOfTimes; i++) {
            buildString += "MEOW "
        };
        break;
    case "pig":
        for (i = 0; i < numberOfTimes; i++) {
            buildString += "OINK "
        };
        break;
    default:
        buildString += `The ${animal} is not in our zoo`;

}

res.send(buildString);

//  ============================

let animal = (String(req.params.animal) || "invalid-animal"),
    numberOfTimes = (parseInt(req.params.numberOfTimes) || 0);

switch (animal) {
    case "dog":
        return res.send("WOOF ".repeat(numberOfTimes));
    case "pig":
        return res.send("OINK ".repeat(numberOfTimes));
    default:
        return res.send("The animal is not in our zoo!!!");
}

//  =========================

let animal = req.params.animal;
let numberOfTimes = req.params.numberOfTimes

// if statements for possible values of animal: cat, dog, pig
if (req.params.animal === "cat") {
    for (let i = 0; i < numberOfTimes; i++) {
        buildString += "MEOW ";
    }
    res.send(buildString);
} else if (req.params.animal === "dog") {
    for (let i = 0; i < numberOfTimes; i++) {
        buildString += "WOOF ";
    }
    res.send(buildString);
} else if (req.params.animal === "pig") {
    for (let i = 0; i < numberOfTimes; i++) {
        buildString += "OINK ";
    }
    res.send(buildString);
} else {
    res.send(`The ${animal} is not in our zoo.`)
}

// ==============================


// Object to represent our animals as an array holding their sound and face
const zoo = {
    bear: ["roar", "🐻"],
    bee: ["buzz", "🐝"],
    bird: ["tweet", "🐦"],
    cat: ["meow", "🐱"],
    cow: ["moo", "🐮"],
    dog: ["woof", "🐕"],
    frog: ["ribbit", "🐸"],
    horse: ["neigh", "🐴"],
    mouse: ["squeak", "🐭"],
    pig: ["oink", "🐷"],
    sheep: ["baaah", "🐑"],
};

const zooAnimals = Object.keys(zoo);


//  ----------------
//  Helper Functions
//  ----------------
const getFace = (animal) => zoo[animal][1];

const getSound = (animal) => zoo[animal][0].toUpperCase();

const getAnimalString = (animal, numberOfTimes) =>
    zooAnimals.includes(animal) ?
        `${getFace(animal)} - ${`${getSound(animal)} `.repeat(numberOfTimes).trim()}!` :
        `The ${animal} isn't in the zoo!`;

const getAnimalChoices = () => `Available animals are: ${zooAnimals.join(", ")}`;

// ============================== 

const myArgs = process.argv.slice(2);

let animal = myArgs[0];
let numOfTimes = myArgs[1];
/*
switch (myArgs[0]) {
  case 'cat':
    console.log(`${myArgs[0]} MEOW .`);
    break;
  case 'dog':
    console.log(`${myArgs[0]} WOOF .`);
    break;
  case 'pig':
    console.log(`${myArgs[0]} OINK .`);
    break;
  default:
    console.log(`Sorry, ${animal} is not in our zoo.`);
}
 
*/
switch (animal) {
    case 'dog':
        sound = "WOOF ";
        break;
    case "pig":
        sound = "OINK ";
        break;
    case 'cat':
        sound = "MEOW ";
        break;
    default:
        sound = `${animal} is not in our zoo`;
}

console.log(`You entered ${animal} that makes ${sound}`);

for (i = 0; i < numOfTimes; i++) {
    console.log(sound + " ");
}

// ==================

const myArgs = process.argv.slice(2);

let animal = myArgs[0];
let numOfTimes = myArgs[1];

function displayAnimalSound() {
    let sound = findAnimalSound(animal);
    console.log(`${animal} sound is ${sound}`);
    displaySound(sound);
}

function displaySound (sound){
    for (let i = 0; i < numOfTimes; i++) {
        console.log(sound);
    }
}

function findAnimalSound(animal) {
    let sound = "";
    switch (animal) {
        case 'dog':
            sound = "WOOF ";
            break;
        case "pig":
            sound = "OINK ";
            break;
        case 'cat':
            sound = "MEOW ";
            break;
        default:
            sound = `${animal} is not in our zoo`;
    }
    return sound;
}

displayAnimalSound();

// ======================