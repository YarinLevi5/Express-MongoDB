const mongoose = require('mongoose');
let students = mongoose.model('Students', new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    grade: {
        required: true,
        type: Number
    },
    age: {
        required: true,
        type: Number
    }
}));

module.exports = students;