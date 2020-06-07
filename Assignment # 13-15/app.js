//CHAPTER 14-16

//TASK 1
var emptyArrarLiteral = [];

//TASK 2
var emptyArrayObject = {};

//TASK 3
var stringArray = ["Bisma", "Munazza" , "Zaid" , "Hassan" ,"Shahzain"];

//TASK 4
var numArray = [1,2,3,4,5,6];

//TASK 5
var booleanArray = [true, false];

//TASK 6
var mixedArray = ["bisma", true, 1, "zaid", 6, false];

//TASK 7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phill.", "PhD"];
document.write("<h2>Qualifications</h2>");
for (var i=0; i < qualifications.length; i++){
    document.write((i+1)+ ") "+ qualifications[i]+ "<br>");
}

//TASK 8
var stuNames = ["Bisma Khan", "Zaid Khan", "Tooba Khan Ghory"];
var stuMarks = [480, 350, 400];
for (var i=0; i < stuNames.length; i++){
    document.write("Score of "+ stuNames[i]+" is " + stuMarks[i] + ". Percentage : " + (stuMarks[i] / 500)*100 + "% <br>");
}

//TASK 9
var colorNames = ["Red", "Blue", "Green", "Yellow", "Orange", "Brown", "Black"];
document.write("<h2>Color Names</h2>");
for (var i=0; i < colorNames.length; i++){
    document.write((i+1)+ ") "+ colorNames[i]+ "<br>");
}

var beginningColor = prompt("What color you want to add at the beginning");
colorNames.unshift(beginningColor);
document.write("<h2>Color Names after inserting color at beginning</h2>");
for (var i=0; i < colorNames.length; i++){
    document.write((i+1)+ ") "+ colorNames[i]+ "<br>");
}

var endColor = prompt("What color you want to add at the end");
colorNames.push(endColor);
document.write("<h2>Color Names after inserting color at end</h2>");
for (var i=0; i < colorNames.length; i++){
    document.write((i+1)+ ") "+ colorNames[i]+ "<br>");
}

colorNames.splice(0,0,"Mergenda","Purple");
document.write("<h2>Color Names after adding two colors at beginning</h2>");
for (var i=0; i < colorNames.length; i++){
    document.write((i+1)+ ") "+ colorNames[i]+ "<br>");
}

colorNames.shift();
document.write("<h2>Color Names after removing first color</h2>");
for (var i=0; i < colorNames.length; i++){
    document.write((i+1)+ ") "+ colorNames[i]+ "<br>");
}

colorNames.pop();
document.write("<h2>Color Names after removing last color</h2>");
for (var i=0; i < colorNames.length; i++){
    document.write((i+1)+ ") "+ colorNames[i]+ "<br>");
}

var index = +prompt("Enter at which index you want to insert a color");
var color = prompt("Enter color");
colorNames.splice(index, 0, color);
document.write("<h2>Color Names after adding color to desired index</h2>");
for (var i=0; i < colorNames.length; i++){
    document.write((i+1)+ ") "+ colorNames[i]+ "<br>");
}

var index = +prompt("Enter at which index you want to delete a color");
var numofColors = prompt("Enter how many colors you want to delete");
colorNames.splice(index, numofColors);
document.write("<h2>Color Names after removing colors of desired index</h2>");
for (var i=0; i < colorNames.length; i++){
    document.write((i+1)+ ") "+ colorNames[i]+ "<br>");
}

//TASK 10
var array = [320, 230, 480, 120];
document.write("Scores of Students : "+array+ "<br>");
document.write("Ordered Scores of Students : "+array.sort()+ "<br>");

//TASK 11
var citiesArray = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("Cities list : "+citiesArray+ "<br>");
document.write("Selected cities list : " +citiesArray.slice(0,3));

//TASK 12
var arr = ["This", "is", "my", "cat"];
document.write("Array : <br>"+arr+ "<br>");
var string = arr.join();
document.write("String : <br>"+ string + "<br>");

//TASK 13
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("<h3>Devices</h3>");
document.write(devices + "<br> <br> ");
for (var i=0; i < devices.length; i++){
    document.write("Out: <br>"+ devices[i]+ "<br>");
}

//TASK 14
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("<h3>Devices</h3>");
document.write(devices + "<br> <br> ");
for (var i = devices.length-1; i >= 0; i--){
    document.write("Out: <br>"+ devices[i]+ "<br>");
}

//TASK 15
var phoneManufacturer = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
document.write("<h3>Phone Manufacturer</h3>");
for (var i = 0; i < phoneManufacturer.length; i++){
    document.write(phoneManufacturer[i]+ "<br>");
}