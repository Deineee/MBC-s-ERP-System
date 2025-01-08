const express = require('express')

const {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
} = require('../controllers/userController')

const router = express.Router()

//sample for getting all user 
router.get('/', getUsers)

//sample for getting single user 
router.get('/:id', getUser)

//sample POST a  new user 
router.post('/', createUser)

//sample DELETE a  new user
router.delete('/:id', deleteUser)

//sample UPDATE a  new user 
router.patch('/:id', updateUser) 

module.exports = router