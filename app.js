const express = require('express');

const app = express()
app.get('/', (req, res) => {
  res.send('Try hero!')
})
app.set('view engine', 'pug')

app.get('/hello', (req, res) => {
  res.send('Hello, hero!')
})

app.listen(3000, () => {
  console.log('The app is running on localhost:3000.')
})
