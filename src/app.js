const express = require("express");
const { connectDB } = require("../config/database");
const User = require("../models/user");

const app = express();
const port = 3000;

app.use(express.json()); // for parsing JSON bodies

app.post("/user", async (req, res) => {
  try {
    const userObj = new User(req.body);
    await userObj.save();
    res.send("User data stored successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving user");
  }
});

app.get("/user", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching users");
  }
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
});
