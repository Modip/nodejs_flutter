const express = require("express");
const router = express.Router();

const booKController = require("../controllers/userController.js");

//with Sequelize
router.post('/addUser', booKController.addUser)
router.get('/allUsers', booKController.getAllUsers)



module.exports = router;