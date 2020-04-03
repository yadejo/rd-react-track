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
    pokemon = data.pokemon.map(({ id, url, sprite }) => { return { id, url, sprite } })
    if (pokemon) return res.json(pokemon)
    return res.sendStatus(404)
})

app.get('/pokemon/:id', (req, res, next) => {
    pokemon = data.pokemon.find(p => p.id == req.params.id)
    if (pokemon) return res.json(pokemon)
    return res.sendStatus(404)
})

app.use('/sprites', express.static('sprites'))

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
