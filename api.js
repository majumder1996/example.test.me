var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
let date_ob = new Date();
var logs = require('./logging');
var studentModel = require('./studentschema');

var query = 'mongodb://127.0.0.1:27017/collage';

const db = (query);
mongoose.Promise = global.Promise;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error) => {
    if(error) {
        logs(error);
    }
    else {
        logs(date_ob+" Dugga dugga database connected successfully");
    }
});


router.post('/save', (req,res) => {
    var newStudent = new studentModel();
    newStudent.StudentID = req.params.StudentID;
    newStudent.Name = req.body.Name;
    newStudent.Roll = req.body.Roll;
    newStudent.Birthday = req.body.Birthday;
    newStudent.Address = req.body.Address;

    newStudent.save(function(err, data) {
        if(err) {
            logs(error);
        }
        else {
            logs(date_ob+" New Data inserted");
            res.send("200 OK");
        }
    });
})

module.exports = router;
