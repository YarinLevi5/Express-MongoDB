const mongoose = require('mongoose');
let grades = mongoose.model('grades', new mongoose.Schema({
    student_id: String,
    grade: Number
}))

module.exports = grades;