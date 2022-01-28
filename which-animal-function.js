

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