const express = require('express'),
    app = express(),
    port = 3000,
    fs = require('fs-extra')
app.use(express.static('public'));

app.use(function (req, res, next) {
    fs.readJSON('req.json', (err, data) => {
        let obj = {
            path: req.path
        }
        data.push(obj)
        fs.writeJSON('req.json', data)
    });
    next();
});


let mongoose = require('mongoose'),
    Students = require('./students'),
    Grades = require('./grades');


mongoose.connect('mongodb://localhost/school').then(() => {
    app.listen(port, function () {
        console.log(`app listening on port ${port}!`)
    });
}).catch((error) => {
    console.log(error)
});

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/insert-students', (req, res) => {
    let student = new Students({
        name: 'ziv',
        grade: 80,
        age: 18
    })
    student.save((error, student) => {
        console.log(error ? error : student);
    })
    res.send('Insert one student')
})

app.get('/insert-students/:name', (req, res) => {
    let studentName = req.params.name;
    Students.find({
        name: studentName
    }, function (err, student) {
        if (err) {
            console.log(err);
        } else {
            res.json(student)
        }
    })
})

app.get('/students', (req, res) => {
    Students.find((err, students) => {
        if (err) {
            console.log(err);
        } else {
            res.send(students);
        }
    })
})

app.delete('/students/:name', (req, res) => {
    Students.deleteOne({
        name: req.params.name
    }, function (err, student) {
        if (err) {
            console.log(err);
        } else {
            res.json(student);
        }
    })
})

app.delete('/students-id/:id', (req, res) => {
    let studentsId = req.params.id;
    Students.findOneAndDelete({
        id: studentsId
    }, function (err, student) {
        if (err) {
            console.log(err);
        } else {
            res.json(student);
        }
    })
})

app.get('/max-grade', (req, res) => {
    Students.find({})
        .then(data => {
            let max = data[0].grade;
            data.forEach(student => student.grade > max ? max = student.grade : max)
            res.json({
                'grade': max
            })
        })
        .catch(err => console.log(err))
})


app.patch('/grades/:grade', (req, res) => {
    Grades.updateOne({
        $set: {
            grade: req.params.grade
        }
    }, function (err, grade) {
        if (err) {
            console.log(err);
        } else {
            res.json(grade);
        }
    })
})