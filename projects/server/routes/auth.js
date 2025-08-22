const express = require("express");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const Client = require("../models/client");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email, and password are required" });
    }

    const existing = await Client.findOne({ email });
    if (existing) {
      return res
        .status(400)
        .json({ message: "This email address is already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newClient = await Client.create({
      name,
      email,
      password: hashedPassword,
    });

    const payload = { name: newClient.name, email: newClient.email };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({
      status: true,
      token,
      name: newClient.name,
      email: newClient.email,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: "Server error" });
  }
});

module.exports = router;
