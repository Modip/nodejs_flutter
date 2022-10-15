
const User = require('../models/userModel.js')

const addUser = async (req, res) => {
    const { fullname, email, password} = req.body
    const  newUser=  User.build({
        "fullname": fullname,
        "email": email,
        "password": password
      
    })
    try {
        await newUser.save()
        res.status(200).json(newUser)
    }catch (error){
        res.json(error)
    }

}

const getAllUsers = async (req, res) => {
    const users = await User.findAll()
    res.status(200).json(users)
    
}


module.exports = {
    addUser, getAllUsers
}