var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    StudentID:Number,
    Name:String,
    Roll:Number,
    Birthday:Date,
    Address:String
});

module.exports = mongoose.model(
    'student',studentSchema,'students'
);