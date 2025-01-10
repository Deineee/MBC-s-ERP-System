require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/user')
const employeeRoutes = require('./routes/employeeRoutes');
//express app
const mbc = express()

//middleware
mbc.use(express.json())

mbc.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//routes 
mbc.use('/api/user',userRouter)

//employee routes
mbc.use('/api/employees', employeeRoutes);

//connect to DB
mongoose.connect(process.env.MONGO_URI)
.then (() => {
    mbc.listen(process.env.PORT, () =>{
    console.log('connected to DB and listening on port', process.env.PORT)
})
})
.catch ((error) => {
    console.log(error)
})
