const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://FoodApp:tq0jPKh6gbb2fNVc@cluster0.agqr9s7.mongodb.net/foodapp';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to Database Successfully');
    } catch (error) {
        console.log('MONGO Connect Error')
    }
}

module.exports = mongoDB;
