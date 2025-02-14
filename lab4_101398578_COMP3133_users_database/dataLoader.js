// File: dataLoader.js

const mongoose = require("mongoose");
const fs = require("fs");
const User = require("./models/User");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

fs.readFile("UsersData.json", "utf8", async (err, data) => {
    if (err) {
        console.error("Error reading file", err);
        return;
    }
    
    try {
        const users = JSON.parse(data);
        await User.insertMany(users);
        console.log("Data inserted successfully");
        mongoose.connection.close();
    } catch (error) {
        console.error("Error inserting data", error);
    }
});
