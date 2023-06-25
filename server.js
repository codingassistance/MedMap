const express = require('express')
const path = require('path')
const axios = require('axios')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname,'home.html'));
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'login.html'));
})

app.get('/map', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html') );
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'signup.html') );
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname,'contact.html'));
})
app.get('/book', (req, res) => {
    res.sendFile(path.join(__dirname,'book.html'));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}-http://localhost:3000`)
})