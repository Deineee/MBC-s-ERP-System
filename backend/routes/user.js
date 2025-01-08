const express = require('express')
const {
    createUser,
} = require('../controllers/userController')

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
router.post('/', createUser)

//sample DELETE a  new user manage
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a new user manage'})
})

//sample UPDATE a  new user manage
router.patch('/', (req, res) => {
    res.json({mssg: 'UPDATE a new user manage'})
})  

module.exports = router