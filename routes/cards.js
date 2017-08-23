const express = require('express')
const router = express.Router()
const { data } = require('../data/words_en.json')
const { cards } = data

router.get('/', (req, res) => {
  const randomId = Math.floor(Math.random() * cards.length)
  res.redirect(`/cards/${randomId}`)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  let { side } = req.query
  if (!side) side = 'question' 
  const text = cards[id][side]
  const { hint } = cards[id]
  const name = req.cookies.username
  const templateData = { text, hint, side, id, name }
  
  res.render('card', templateData)
})

module.exports = router