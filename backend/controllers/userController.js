const User = require('../models/userModel')
const mongoose = require ('mongoose')

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

// create new user
const createUser = async (req, res) => {
    const {firstName, middleName, lastName, userName, role, email} = req.body
    
        // add doc to db
        try {
            const user = await User.create({firstName, middleName, lastName, userName, role, email})
            res.status(200).json(user)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
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

    res.status(200).json(user)
}

//update user
const updateUser = async (req, res) => {
    
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'User not found'})
    }

    const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!user){
        return res.status(404).json({error: 'User not found'})
    }

    res.status(200).json(user)
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}