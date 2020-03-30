const express = require('express')
const fs = require('fs')

const port = 1337

const app = express()

let data = require('./pokemon.json')




app.get('/pokemon', (req, res, next)=>{
    res.json(data.pokemon)
})

app.use('/sprites',express.static('sprites'))

app.listen(port, ()=>{
    console.log('listening')
})
