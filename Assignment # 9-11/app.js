//CHAPTER 9-11

//TASK 1
var cityName = prompt("Enter City");
if(cityName === "Karachi"){
    alert("Welcome to city of lights");
}

//TASK 2
var gender = prompt("Enter your gender");
if(gender === "Male" || gender === "male"){
    alert("Good Morning Sir !");
}else if(gender === "Female" || gender === "female"){
    alert("Good Morning Ma'am !");
}

//TASK 3
var signalColor = prompt("Enter your gender");
if(signalColor === "Red" || signalColor === "red"){
    alert("Must Stop");
}else if(signalColor === "Yellow" || signalColor === "yellow"){
    alert("Ready to move");
}else if(signalColor === "Green" || signalColor === "green"){
    alert("Move now");
}else{
    alert("Invalid signal color");
}

//TASK 4
var currentFuel = +prompt("Enter fuel in litres");
if(currentFuel < 0.25){
    alert("Please refill the fuel in your car");
}

//TASK 5
var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true"); 
}

var b = 82; 
if (b++ === 83){ 
    alert("given condition for variable b is true"); 
}

var c = 12; 
if (c++ === 13){ 
    alert("condition 1 is true"); 
} 
if (c === 13){ 
    alert("condition 2 is true"); 
} 
if (++c < 14){ 
    alert("condition 3 is true"); 
} 
if(c === 14){ 
    alert("condition 4 is true"); 
} 

var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
}

if (true){ 
    alert("True"); 
} 
if (false){ 
    alert("False"); 
}

if("car" < "cat"){ 
    alert("car is smaller than cat"); 
}

//TASK 6

document.write("<h1>Marks Sheet</h1>");
var totalMarks = +prompt("Enter total Marks");
document.write("Total marks : "+totalMarks+ "<br>");

var marks = +prompt("Enter your marks obtained in three subjects");
document.write("Marks obtained : " +marks+ "<br>");

var percentage = (marks / totalMarks) * 100;
document.write("Percentage : "+percentage+ "% <br>");

if(percentage >= 80){
    document.write("Grade : A-One <br> Remarks : Excellent <br>");
}else if(percentage >= 70){
    document.write("Grade : A <br> Remarks : Good <br>");
}else if(percentage >= 60){
    document.write("Grade : B <br> Remarks : You need to improve <br>");
}else{
    document.write("Grade : Fail <br> Remarks : Sorry <br>");
}

//TASK 7

var secretNumber = 5;
var secretInput = +prompt("Guess the secret number");
if(secretInput === secretNumber){
    alert("Bingo! \r\n Correct answer");
}else if(secretInput === (secretNumber + 1 )){
    alert("Cloase enough to the correct answer");
}

//TASK 8

var number = +prompt("Enter number");
if(number % 3 === 0){
    alert("Number is divisible by 3");
}

//TASK 9
var inputNum = +prompt("Enter any number");
if(inputNum % 2 === 0){
    alert("Even number");
}else{
    alert("Odd number");
}

//TASK 10
var temp = +prompt("Enter temperature");
if(temp > 40){
    alert("It is too hot outside.")
}else if(temp > 30){
    alert("The weather today is normal");
}else if(temp > 20){
    alert("Today's weather is cool");
}else if(temp > 10){
    alert("OMG! \r\nToday's weather is so cool");
}

//TASK 11
var firstNum = +prompt("Enter first operand");
var secondNum = +prompt("Enter second Operand");
var operator = prompt("Enter Operator");

if(operator === "+"){
    alert("Sum is: "+ (firstNum + secondNum));
}else if(operator === "-"){
    alert("Difference is: "+ (firstNum - secondNum));
}else if(operator === "*"){
    alert("Product is: "+ (firstNum * secondNum));
}else if(operator === "/"){
    alert("Division is: "+ (firstNum / secondNum));
}else if(operator === "%"){
    alert("Modulus is: "+ (firstNum % secondNum));
}else{
    alert("Invalid Operator");
}