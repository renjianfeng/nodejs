/**
 * Created by dell4 on 2016/8/15.
 */
var student = require('./student');
var teacher = require('./teacher');

function add(teacherName,students){
    teacher.add(teacherName);
    students.forEach(function(item,index){
        student.add(item);
    })
}

exports.add = add;