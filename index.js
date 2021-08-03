const express = require('express')
const mongoose = require('mongoose')
const app = express()
const URI = 'mongodb+srv://sailee:sailee@cluster0.cxywa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const register = require('./controllers/register')
const bcrypt = require('bcryptjs')
const { login } = require('./controllers/login')

app.use(express.json())

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log('We have connected.')
    })
    .catch((err) => {
        console.log(err)
    })

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('hellloooo!')
})

app.post('/register', (req, res) => {
    register.registerUser(req, res, bcrypt)
})

app.post('/login', (req, res) => {
    login(req, res, bcrypt)
})

app.listen(process.env.PORT || 3001, () => {
    console.log('yoooooooooooo')
})

// mongodb+srv://sailee:<password>@cluster0.cxywa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority