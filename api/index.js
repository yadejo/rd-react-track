const express = require('express')
const data = require('./pokemon.json')

const port = 1337

const app = express()


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200)
    }
    next()
})

app.get('/pokemon', (req, res, next) => {
    res.json(data.pokemon)
})

app.get('/pokemon/:id', (req, res, next) => {
    res.json(data.pokemon.find(p => p.id == req.params.id))
})

app.use('/sprites', express.static('sprites'))

app.listen(port, () => {
    console.log('listening')
})
