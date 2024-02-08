const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require('./db');
const cors = require('cors');

const CreateUser = require("./Routes/CreateUser");
const DisplayData = require("./Routes/DisplayData");
//const seedFoods = require("./seeds/FoodSeeds");
//const seedCategory = require("./seeds/CategorySeeds");


mongoDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.use(cors({
    origin: ['http://localhost:3000']
}));
app.use(express.json());
app.use('/api', CreateUser);
app.use('/api', DisplayData);
//seedFoods();
//seedCategory();

app.listen(port, () => {
    console.log(`Server Started At Port ${port}`);
})