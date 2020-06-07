//CHAPTER 6-9

//TASK 1
var a = +prompt("Enter any number");
document.write("Result: <br>");
document.write("The value of a is: " + a + "<br>");
document.write("<hr> <br>");
document.write("The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br> <br> <br>");
document.write("The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a is: " + a + "<br> <br> <br>");
document.write("The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br> <br> <br>");
document.write("The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a + "<br> <br> <br>");

//TASK 2
var a = 2;
document.write("a is: " + a + "<br>");
var b = 1;
document.write("b is: " + b + "<br>");
var result = --a - --b + ++b + b--;
document.write("Result is: " + result + "<br>");

//TASK 3
var userName = prompt("Enter your Name");
alert("Welcome " + userName + "!");

//TASK 5
var tableNum = +prompt("Enter any number");
if (tableNum === 0){
    document.write("<b>TABLE OF : 5</b> <br> <br> <br>")
    for (var i = 1; i <= 10; i++) {
        document.write(5 + " * " + i + " = " + 5 * i + "<br>");
    }
}else{
    document.write("<b>TABLE OF : " + tableNum + "</b> <br> <br> <br>")
    for (var i = 1; i <= 10; i++) {
        document.write(tableNum + " * " + i + " = " + tableNum * i + "<br>");
    }
}

//TASK 6

var subName1 = prompt("Enter first subject name");
var subName2 = prompt("Enter second subject name");
var subName3 = prompt("Enter third subject name");
var totalMarksForEachSubject = 100;
var obtMarksSub1 = +prompt("Enter Obtained marks in subject " + subName1); 
var obtMarksSub2 = +prompt("Enter Obtained marks in subject " + subName2); 
var obtMarksSub3 = +prompt("Enter Obtained marks in subject " + subName3);
var totalMarks = 300;
var totalObtmarks = obtMarksSub1 + obtMarksSub2 + obtMarksSub3; 
var percentage = (totalObtmarks / totalMarks) * 100;
document.write("<b><tr><th>Subjects</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th></tr></b> <br>");
document.write("<tr><td>"+ subName1 +"</td> <td>"+ 100 +"</td> <td>"+ obtMarksSub1 +"</td> <td>"+ (obtMarksSub1/100) *100 +"%</td></tr> <br>");
document.write("<tr><td>"+ subName2 +"</td> <td>"+ 100 +"</td> <td>"+ obtMarksSub2 +"</td> <td>"+ (obtMarksSub2/100) *100 +"%</td></tr> <br>");
document.write("<tr><td>"+ subName3 +"</td> <td>"+ 100 +"</td> <td>"+ obtMarksSub3 +"</td> <td>"+ (obtMarksSub3/100) *100 +"%</td></tr> <br>");
document.write("<b><tr><td></td> <td>"+ totalMarks +"</td> <td>"+ totalObtmarks +"</td> <td>"+ percentage +"%</td></tr></b><br>");
