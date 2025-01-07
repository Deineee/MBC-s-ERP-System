require('dotenv').config()

const express = require('express')

//express app
const app = express()

//test
app.get('/', (req, res) => {
    res.json({mssg: 'whats up'})
})

app.listen(process.env.PORT, () => {
    console.log('heyy', process.env.PORT)
})
process.env