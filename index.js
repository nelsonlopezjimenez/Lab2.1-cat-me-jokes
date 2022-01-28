
const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 4444

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/cat', (req, res) => {
    res.send('MEOW'); 

});

app.get('/:animal/', (req, res) => {
    let animal = req.params.animal;
    
    if(animal == "dog"){
       res.send("WOOF"); 
    }else if(animal == 'cat'){
       res.send("MEOW");
    }else if(animal == 'pig'){
       res.send("OINK");   
    }else if(animal == 'cow'){
       res.send("MOOO");
    }else{
        res.send("animal not in zoo"); 
    }
});

app.get('/:animal/:number',(req,res) => {
    let animal = req.params.animal; 
    let number = req.params.number; 
    let sound; 

    if(animal == "dog"){
       sound = "WOOF"; 
    }else if(animal == 'cat'){
       sound = "MEOW";
    }else if(animal == 'pig'){
       sound = "OINK";   
    }else if(animal == 'cow'){
       sound = "MOOO";
    }else{
        sound = ("animal not in zoo"); 
    }

    let result = ""; 
    for( i = 0; i < number; i++){
        result = result + sound + " " ; 
    }
    res.send(result); 

}); 

app.listen(port, () => {
  console.log(`We are live on Port:${port}`)
})
