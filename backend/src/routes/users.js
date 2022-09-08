const { Router } = require("express");
// const { Router } = require("express").Router(); Evite a creer deux variables
const router = Router();
const User = require("../models/UserModel");
const { faker } = require("@faker-js/faker");

router.get("/api/users", async function (req, res) {
  const users = await User.find();
  res.json(users);
  
});

router.get("/api/users/create", async function (req, res) {
  for (let i = 0; i < 5; i++) {
    await User.create({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      avatar: faker.image.avatar(),
    });
  }
  res.send("add users");
});

module.exports = router;
