/**
 * Created by dell4 on 2016/8/15.
 */
function add(student){
    var sd="";
     student.forEach(function(item,index){
        sd += "<br>student:"+student[index]
    })
    return sd;
}
exports.add=add