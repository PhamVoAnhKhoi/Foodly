const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    // Properties for category
    title:{type: String, required: true},
    value: {type: String, required: true},
    imageUrl: {type: String, required: true},
});

module.exports = mongoose.model('Category', CategorySchema);
