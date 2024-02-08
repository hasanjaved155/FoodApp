const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    CategoryName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    options: [
        {
            _id: false,
            half: "String",
            full: "String"
        },

    ],
    size: [
        {
            _id: false,
            regular: "String",
            medium: "String",
            large: "String"
        },
    ],
    description: {
        type: String,
        required: true
    }
});


const food = mongoose.model("food", userSchema);

module.exports = food;