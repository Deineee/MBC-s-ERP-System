const express = require('express')
const authenticate = require('../middleware/authMiddleware');
const {
    getUsers,
    getUser,
    deleteUser,
    updateUser,
    signupUser,
    loginUser
} = require('../controllers/userController')

const router = express.Router()

// Login route
router.post('/login', loginUser);

// Signup route
router.post('/signup', signupUser);

//sample for getting all user 
router.get('/', authenticate, getUsers)

//sample for getting single user 
router.get('/:id', authenticate, getUser)

//sample DELETE a  new user
router.delete('/:id', authenticate, deleteUser)

//sample UPDATE a  new user 
router.patch('/:id', authenticate, updateUser) 

module.exports = router