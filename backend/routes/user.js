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
router.post('/createUser', authenticate, authorizeUserCreation, createUser)

//sample for getting all user 
router.get('/', authenticate, getUsers, authorizeUserCreation)

//sample for getting single user 
router.get('/:id', authenticate, getUser, authorizeUserCreation)

//sample DELETE a  new user
router.delete('/:id', authenticate, deleteUser, authorizeUserCreation)

//sample UPDATE a  new user 
router.patch('/:id', authenticate, updateUser, authorizeUserCreation) 

module.exports = router