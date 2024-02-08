const express = require('express');
const router = express.Router();
const food = require('../models/Food');
const Category = require("../models/FoodCategory");


router.get('/displayAllFoods', async (req, res) => {
    try {
        const foods = await food.find({});
        if (!foods) {
            return res.status(200).send({
                success: false,
                message: "No Food Found",
            });
        }
        return res.status(200).send({
            success: true,
            message: "All Foods lists",
            foods,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error While Getting Foods",
            error,
        });
    }

})

router.get('/displayAllCategory', async (req, res) => {
    try {
        const category = await Category.find({});
        if (!category) {
            return res.status(200).send({
                success: false,
                message: "No Category Found",
            });
        }
        return res.status(200).send({
            success: true,
            message: "All Category lists",
            category,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error While Getting Categories",
            error,
        });
    }

})

module.exports = router;