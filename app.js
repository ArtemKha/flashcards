const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  const name = req.cookies.username
  name ? res.render('index', { name }) 
       : res.redirect('/hello')
})

app.get('/hello', (req, res) => {
  const name = req.cookies.username
  name ? res.redirect('/')
       : res.render('hello') 
})

app.post('/', (req, res) => {
  res.clearCookie('username')
  res.redirect('/hello')
})

app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username )
  res.redirect('/')
})

app.get('/cards', (req, res) => {
  res.locals = {
    prompt: 'Who is buried in Grant\'s tomb?',
    hint: 'Think about whose tomb it is.',
    colors
  }
  res.render('card')
})

app.use( (req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})
app.use( (err, req, res, next) => {
  res.locals.error = err
  res.status(err.status)
  res.render('error')
})
app.listen(3000, () => {
  console.log('The app is running on localhost:3000.')
})
