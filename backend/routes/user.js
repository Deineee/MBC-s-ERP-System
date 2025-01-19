const express = require('express')
const authenticate = require('../middleware/authMiddleware');
const authorizeUserCreation = require('../middleware/authorizeUserCreation');
const {
    getUsers,
    getUser,
    deleteUser,
    updateUser,
    createUser,
    loginUser
} = require('../controllers/userController')

const router = express.Router()

// Login route
router.post('/login', loginUser);

// Signup route
router.post('/createUser', authenticate, authorizeUserCreation, createUser);

//sample for getting all user 
router.get('/', authenticate, authorizeUserCreation, getUsers)

//sample for getting single user 
router.get('/:id', authenticate, authorizeUserCreation, getUser)

//sample DELETE a  new user
router.delete('/:id', authenticate, authorizeUserCreation, deleteUser)

//sample UPDATE a  new user 
router.patch('/:id', authenticate, authorizeUserCreation, updateUser) 

module.exports = router