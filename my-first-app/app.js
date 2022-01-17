const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! I am writing a new program in Node JS!')
})

app.get('/goodbye', function (req, res){
    res.send('Good night')
    })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
