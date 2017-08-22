const express = require('express');

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/card', (req, res) => {
  res.locals.prompt = 'Who is buried in Grant\'s tomb?'
  res.render('card')
})

app.listen(3000, () => {
  console.log('The app is running on localhost:3000.')
})
