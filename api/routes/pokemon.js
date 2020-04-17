const express = require('express')
const router = express.Router()
const data = require('../data/pokemon.json')

router.get('/', (req, res, next) => {
    pokemon = data.pokemon.map(({ id, url, sprite }) => { return { id, url, sprite } })
    if (pokemon) return res.json(pokemon)
    return res.status(404).json({error:{message:'Not found'}})
})

router.get('/:id', (req, res, next) => {
    pokemon = data.pokemon.find(p => p.id == req.params.id)
    if (pokemon) return res.json(pokemon)
    return res.status(404).json({error:{message:'Not found'}})
})

module.exports = router
