const User = require('../models/userModel')
const mongoose = require ('mongoose')
const jwt = require('jsonwebtoken')
const { io } = require('../server');
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, { expiresIn: '3d' })
  }

/// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        
        // create a token
        const token = createToken(user._id);

        res.status(200).json({ user: { email: user.email, role: user.role }, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Signup user
const signupUser = async (req, res) => {
    const { firstName, middleName, lastName, email, password, role } = req.body;

    try {
        const user = await User.signup(firstName, middleName, lastName, email, password, role);

        //// Log user creation in the terminal
        console.log(`A new user was created: ${user.firstName} ${user.lastName} (${user.email})`);

        // Emit a WebSocket event to notify the frontend
        io.emit('userCreated', { message: `A new user (${firstName} ${lastName}) has been created!` });

        // create a token
        const token = createToken(user._id);

        res.status(200).json({ user: { email: user.email, role: user.role }, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// get all user
const getUsers = async (req, res) => {
    const user = await User.find({}).sort({createdAt: -1})

    res.status(200).json(user)
}

// get single user
const getUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'User not found'})
    }

    const user = await User.findById(id)

    if (!user){
        return res.status(404).json({error: 'User not found'})
    }

    res.status(200).json(user)
}

// delete user
const deleteUser = async (req, res) => {

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'User not found'})
    }

    const user = await User.findOneAndDelete({_id: id})

    if (!user){
        return res.status(404).json({error: 'User not found'})
    }

    console.log(`A user was deleted: ${user.firstName} ${user.lastName} (${user.email})`);

    res.status(200).json(user)
}

//update user
const updateUser = async (req, res) => {
    
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'User not found'})
    }

    const user = await User.findOneAndUpdate(
        { _id: id },
        { ...req.body },
        { new: true } 
      );

    if (!user){
        return res.status(404).json({error: 'User not found'})
    }

    res.status(200).json(user)
}

module.exports = {
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    signupUser,
    loginUser
}