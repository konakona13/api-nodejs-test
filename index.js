const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/dog', function (req, res) {
    res.json({'sound' : '멍멍'})
})

app.get('/cat', function (req, res) {
    res.send('고양이')
})

app.listen(3000) 