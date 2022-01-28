console.log(process.argv)

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