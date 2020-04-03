const express = require('express')
const bodyParser = require('body-parser')
const data = require('./pokemon.json')

const port = 1337

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/pokemon', (req, res, next) => {
    pokemon = data.pokemon.map(({ id, url, sprite }) => { return { id, url, sprite } })
    if (pokemon) return res.json(pokemon)
    return res.status(404).json({error:{message:'Not found'}})
})

app.get('/pokemon/:id', (req, res, next) => {
    pokemon = data.pokemon.find(p => p.id == req.params.id)
    if (pokemon) return res.json(pokemon)
    return res.status(404).json({error:{message:'Not found'}})
})

app.use('/sprites', express.static('sprites'))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200)
    }
    next()
})

app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
