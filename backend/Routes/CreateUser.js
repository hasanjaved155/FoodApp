const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require("bcrypt");
const JWT = require('jsonwebtoken');
const JWT_SECRET = "fhiuwegiulhjksdcjsdbuivvdsdfffefef";

router.post('/register', async (req, res) => {
    try {
        const { name, email, password, location } = req.body;
        //validation
        if (!name || !email || !password || !location) {
            return res.status(400).send({
                success: false,
                message: "Please Fill all fields",
            });
        }
        //exisiting user
        const exisitingUser = await User.findOne({ email });
        if (exisitingUser) {
            return res.status(401).send({
                success: false,
                message: "user already exisits",
            });
        }
        if (password && password.length < 6) {
            return res.json({ error: "Passsword is required and 6 character long" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        //save new user
        const user = new User({ name, email, password: hashedPassword, location });
        await user.save();
        return res.status(201).send({
            success: true,
            message: "New User Created",
            user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error In Register callback",
            success: false,
            error,
        });
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        //validation
        if (!email || !password) {
            return res.status(401).send({
                success: false,
                message: "Please provide email or password",
            });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(200).send({
                success: false,
                message: "email is not registerd",
            });
        }
        //password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).send({
                success: false,
                message: "Invlid email or password",
            });
        }

        const token = await JWT.sign({ _id: user._id }, JWT_SECRET, { expiresIn: "30d" });

        return res.status(200).send({
            success: true,
            messgae: "login successfully",
            user,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error In Login Callcback",
            error,
        });
    }
});

module.exports = router;