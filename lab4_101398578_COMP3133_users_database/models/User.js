const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        minlength: 4 
    },
    email: { 
        type: String, 
        required: true, 
        match: [/^\S+@\S+\.\S+$/, "Invalid email address"] 
    },
    address: {
        street: String,
        suite: String,
        city: { 
            type: String, 
            required: true, 
            match: [/^[A-Za-z\s]+$/, "City must contain only alphabets and spaces"] 
        },
        zipcode: { 
            type: String, 
            required: true, 
            match: [/^\d{5}-\d{4}$/, "Zipcode format must be 12345-1234"] 
        }
    },
    phone: { 
        type: String, 
        required: true, 
        match: [/^1-\d{3}-\d{3}-\d{4}$/, "Phone format must be 1-123-123-1234"] 
    },
    website: { 
        type: String, 
        required: true, 
        match: [/^(http|https):\/\/[^ "]+$/, "Invalid website URL"] 
    },
    company: {
        name: String,
        catchPhrase: String,
        bs: String
    }
});

module.exports = mongoose.model("User", userSchema);
