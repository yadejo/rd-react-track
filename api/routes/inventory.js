const express = require('express')
const fs = require('fs')
const router = express.Router()
const pokemonData = require('../data/pokemon.json')
const inventoryData = () => {
    let data = fs.readFileSync('../api/data/inventory.json', 'utf8')
    return JSON.parse(data)
}

router.get('/', (req, res, next) => {

    return res.status(200).json(inventoryData())
})

router.post('/catch/:id', (req, res, next) => {
    if (inventoryData().party.some(p => p.id == req.params.id)) return res.status(400).json({ error: { message: 'You already catched this pokemon!' } })
    pokemon = pokemonData.pokemon.find(p => p.id == req.params.id)
    if (!pokemon) return res.status(404).json({ error: { message: 'Not found' } })
    pokemon.info = { ...pokemon.info, nickname: '', catchDate: new Date() }
    delete pokemon.url
    if (pokemon) {
        let inventory = inventoryData()
        inventory.party.push(pokemon)
        return fs.writeFile('../api/data/inventory.json', JSON.stringify(inventory), () => { return res.status(200).json(inventoryData()) })
    }
    return res.status(404).json({ error: { message: 'Not found' } })
})

router.delete('/release/:id', (req, res, next) => {
    if (!inventoryData().party.some(p => p.id == req.params.id)) return res.status(404).json({ error: { message: 'Not found' } })
    let inventory = { party: inventoryData().party.filter(p => p.id != req.params.id) }
    console.log('inventory', inventory)
    fs.writeFileSync('../api/data/inventory.json', JSON.stringify(inventory))
    res.status(200).json(inventoryData())
})

module.exports = router
