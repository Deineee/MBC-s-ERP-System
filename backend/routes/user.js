const express = require('express')
const User = require('../models/userModel')

const router = express.Router()

//sample for getting all user manage
router.get('/', (req, res) => {
    res.json({mssg: 'GET all user manage'})
})

//sample for getting single user manage
router.get('/:id', (req, res) =>{
    res.json({mssg: 'GET single user manage'})
})

//sample POST a  new user manage
router.post('/', async (req, res) => {
    const {firstName, middleName, lastName, userName, role, email} = req.body

    try {
        const user = await User.create({firstName, middleName, lastName, userName, role, email})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//sample DELETE a  new user manage
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a new user manage'})
})

//sample UPDATE a  new user manage
router.patch('/', (req, res) => {
    res.json({mssg: 'UPDATE a new user manage'})
})  

module.exports = router