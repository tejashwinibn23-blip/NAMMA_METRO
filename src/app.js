const express = require("express");
const connectDB  = require("../config/database");
const app = express();
const port = 3000;
const User = require("../models/user");

app.post("/user", async (req, res) => {
  try {
    const userObj = new User({
      firstName: "tejahswini",
      lastName: "bn",
      Email: "mail2tejubn06@gmail.com",
      Phone: "9008305774",
    });
    await userObj.save();
    res.send("user data stored successfully");
  } catch (err) {
    console.log(err);
  }
});
app.get("/user", async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});

connectDB().then(() => {
  console.log("connection established successfully");
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});