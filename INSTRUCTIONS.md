## Lab2.1-cat-me-jokes

### Introduction to nodejs, npm, express

### You forked the repository

1. cd into the Lab02-cat-me-jokes directory
1. run "npm install" command
1. Relax for a few minutes. Please watch videos located in canvas, week01-Representing-The-Web: 
    1. Intro to nodejs, npm, installing knock-knock-jokes (~10min)
    1. Nodejs, npm, jokes and cat-me packages (~10min)
    1. Express Server intro Hello World (~10min)
    1. Express Server Adding routes: /cat, /dog, /dog/10 (~10min)
1. Open the folder using Visual Studio Code
1. Follow the instructions.
1. When you are ready, make a "Pull Request" to the original repo (mine)

### Steps to create the App

### Step One

1. navigate to your Desktop Window (or your workspace))
1. create a project that will contain your app
1. type: mkdir 'a-name-for-your-app'
1. cd a-name-for-your-app
1. npm init -y
1. npm install express ejs mongoose cors dotenv
1. npm install @babel/node @babel/core @babel/preset-env --save-dev
1. touch index.js
1. find the express modules in your node_modules folder for instructions and help
1. Open the file README.md. Hover over the tab at the top of the editor, right-click and select "open Preview". Conversely, visit the expressjs dot com web site, select "Getting started Hello world" tab.
1. open index.js and write/copy/paste the code to execute "Hello World"
1. On terminal type "node index.js"
1. Open browser and type the URL http://localhost:3000
1. You should see a message "Hello World!!!"
1. Kill the server using Control-C

### Congratulations!! Pat yourself in the back, you created an express server!!!

## Step Two

1. open index.js for editing
1. Change the listening port to 4444
1. Save your changes, or config the VS Code to automatically save (I do not like it, but it is your choice)
1. create a second route '/cat'
1. send the response as "MEOW!!"
1. start the server (node index.js), open the browser and type in the navigation bar: http://localhost:4444/cat and see the messagge "MEOW!!!"

### Congratulate yourself, you have created a new route!!!

## Step Three

1. You will create a route that will accept parameters. In the code a parameters is identified by the colon ":" character in the route.
1. create a route "/:animal/
1. Inside the route add a condition where the message sent in the response corresponds to the animal typed: For instance, if the animal type is cat, it show "MEOW", if it is dog, it shows "WOOF", if it is a pig, it shows "OINK", etc. Include an else statemnet the show the message "The animal is not in our zoo"
1. Create a route with a parameter an animal name, followed by a parameter number, which represent the number of times the animal makes its sound. 

## Step Four

### Assign to student
1. you have a zoo with three animals: cat, dogs, and pigs
1. Modifiy the code so when the user select an animal, the corresponding message is its sound, when the animal does not exist the output should be the name of the animal followed by the message "do not exist in our zoo".
1. You should use an if/else statement in your code. Conversely, you could use a switch statement. 
