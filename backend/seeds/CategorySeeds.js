const Category = require("../models/FoodCategory");

const dummyCategory = [
    {
        "CategoryName": "Biryani/Rice"
    },
    {
        "CategoryName": "Starter"
    },
    {
        "CategoryName": "Pizza"
    }
]



async function seedCategory() {
    await Category.deleteMany({});
    await Category.insertMany(dummyCategory);
    console.log('db seeded');
}

module.exports = seedCategory;