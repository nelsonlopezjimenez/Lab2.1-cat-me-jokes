const express = require('express')
const app = express()
const port = 4444
 
app.get('/', function (req, res) {
res.send('Hello World! I am writing a new program in Node JS!'    )
})

app.get('/cat', function (req, res){
    res.send('MEOW')
})

app.get('/cat/:numberOfTimes', function (req,res){
    let buildString = ""
    let numberOfTimes = req.params.numberOfTimes

    for(i=0; i < numberOfTimes; i++){
        buildString+= "MEOW "
    }
    res.send(buildString);
})

app.get('/:animal', function(req, res){
    let buildString = ""
    let animal = req.params.animal
    if(req.params.animal == "dog"){
        buildString += "WOOF"
    } else if(req.params.animal == 'pig'){
        buildString += "OINK"
    }
    else{
        buildString+= (`The animal "${animal}" is not in the zoo!`)
    }
    res.send(buildString)
})

app.get('/:animal/:numberOfTimes', function (req, res){
    let buildString = "";
    let numberOfTimes = req.params.numberOfTimes
    let animal = req.params.animal
    if (req.params.animal == "dog") {
        for(i=0; i < numberOfTimes; i++){
            buildString += "WOOF "
        }
        res.send(buildString)
    } else if (req.params.animal == 'pig'){
        for(i=0; i < numberOfTimes; i++){
            buildString += "OINK "
        }
        res.send(buildString)
    }else {
            res.send(`The animal \"${animal}\"is not in our zoo!!`)
        }

})
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})