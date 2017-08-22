const express = require('express');

const app = express()
app.get('/', (req, res) => {
  res.send('Try hero!')
})

app.listen(3000)
