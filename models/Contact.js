const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const ContactSchema = new Schema({
    name: String,
    phone: String,
    email: String
}, {
    timestamps: true
});

// Model
const Contacts = mongoose.model('contacts', ContactSchema);

module.exports =  Contacts;