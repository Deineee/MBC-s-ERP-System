const User = require('../models/userModel')

// get all user

// get single user

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

//update user


module.exports = {
    createUser
}