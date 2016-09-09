/**
 * Created by dell4 on 2016/8/15.
 */
var student = require('./student');
var teacher = require('./teacher');

function add(teacherName,students){
   var ddd1 = teacher.add(teacherName);
   var ddd2 =  student.add(students)
    return ddd1+ddd2;
}

exports.add = add;