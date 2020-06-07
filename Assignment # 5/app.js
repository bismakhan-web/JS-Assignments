//CHAPTER 5

//TASK 1
document.write("<h2>TASK 1</h2>");
var num1 = 3;
var num2 = 9;
var sum = num1 + num2;
document.write("Sum of "+num1+" and "+num2+" is "+sum+"<br>");

//TASK 2
document.write("<h2>TASK 2</h2>");
var num1 = 3;
var num2 = 9;
var mul = num1 * num2;
document.write("Multiplication of "+num1+" and "+num2+" is "+mul+"<br>");

var num1 = 3;
var num2 = 9;
var sub = num1 - num2;
document.write("Subtraction of "+num1+" and "+num2+" is "+sub+"<br>");

var num1 = 3;
var num2 = 9;
var mod = num1 % num2;
document.write("Modulus of "+num1+" and "+num2+" is "+mod+"<br>");

var num1 = 3;
var num2 = 9;
var division = num1 / num2;
document.write("Division of "+num1+" and "+num2+" is "+division+"<br>");

//TASK 3
document.write("<h2>TASK 3</h2>");
var var1;
document.write("Value after variable declaration is: "+var1+"<br>");
var1 = 7;
document.write("Initial Value: "+var1+"<br>");
var1++;
document.write("Value after increment: "+var1+"<br>");
var1 = var1+=7;
document.write("Value after addition is: "+var1+"<br>");
var1--;
document.write("Value after decrement: "+var1+"<br>");
var1 = var1 % 3;
document.write("The remainder is: "+var1+"<br>");

//TASK 4
document.write("<h2>TASK 4</h2>");
var ticketPrice = 600;
document.write("Total cost to buy 5 tickets to a movie is: "+ ticketPrice*5 + " PKR <br>");

//TASK 5
document.write("<h2>TASK 5</h2>");
document.write("<b>TABLE OF 6</b> <br>")
var num = 6;
document.write(num + " * " + 1 + " = " + num*1 + "<br>");
document.write(num + " * " + 2 + " = " + num*2 + "<br>");
document.write(num + " * " + 3 + " = " + num*3 + "<br>");
document.write(num + " * " + 4 + " = " + num*4 + "<br>");
document.write(num + " * " + 5 + " = " + num*5 + "<br>");
document.write(num + " * " + 6 + " = " + num*6 + "<br>");
document.write(num + " * " + 7 + " = " + num*7 + "<br>");
document.write(num + " * " + 8 + " = " + num*8 + "<br>");
document.write(num + " * " + 9 + " = " + num*9 + "<br>");
document.write(num + " * " + 10 + " = " + num*10 + "<br>");


//TASK 6 TEMPERATURE CONVERTER
document.write("<h2>TASK 6</h2>");
var celsius = 25;
var toFahrenhiet = (celsius * 9 / 5) + 32;
document.write(celsius + " C is " + toFahrenhiet + " F <br>");
var fahrenhiet = 70;
var toCelsius = (fahrenhiet - 32) * 5 / 9;
document.write(fahrenhiet + " F is " + toCelsius + " C <br>");

//TASK 7
document.write("<h2>TASK 7</h2>");
document.write("<h1>Shopping Cart</h1>");
var itemPrice1 = 700;
document.write("Price of item 1 is " + itemPrice1 + "<br>");

var itemQuantity1 = 3;
document.write("Quntity of item 1 is " + itemQuantity1 + "<br>");

var itemPrice2 = 550;
document.write("Price of item 2 is " + itemPrice2 + "<br>");

var itemQuantity2 = 2;
document.write("Quantity of item 2 is " + itemQuantity2 + "<br>")

var shippingCharges = 200;
document.write("Shipping Charges " + shippingCharges + "<br> <br> <br>")

var total = (itemPrice1 * itemQuantity1) + (itemPrice2 * itemQuantity2) + shippingCharges;
document.write("Total Cost of your Order is " + total + " Rs. <br>")

//TASK 8
document.write("<h2>TASK 8</h2>");
document.write("<h1>Marks Sheet</h1>");
var totalMarks = 900;
document.write("Total Marks: " + totalMarks + "<br>");

var marksObtained = 750;
document.write("Marks Obtained: " + marksObtained + "<br> <br> <br>");

var percentage = (marksObtained / totalMarks) * 100;
document.write("Percentage: " + percentage + " % <br>");

//TASK 9
document.write("<h2>TASK 9</h2>");
document.write("<h1>Currency in PKR</h1>");
var usDollor = 10;
var saudiRiyal = 25;
var pakCurrency = (usDollor * 104.80) + (saudiRiyal * 28);
document.write("Total Currency in PKR: " + pakCurrency + "<br>");

//TASK 10
document.write("<h2>TASK 10</h2>");
var number = 10;
var calculate = ( ( number + 5 ) * 10 ) / 2;

//TASK 11
document.write("<h2>TASK 11</h2>");
document.write("<h1>Age Calculator</h1>");
var currentYear = 2020;
var birthYear = 2001;
var age = currentYear - birthYear;
document.write("Your Age is: "+ age + "<br>");

//TASK 12
document.write("<h2>TASK 12</h2>");
document.write("<h1>The Geometrizer</h1>");
var radius = 5;
document.write("Radius is: "+ radius + "<br>");

var circumference = 2 * 3.142 * radius;
document.write("The Circumference is: "+ circumference + "cm <br>");

var area = 2 * 3.142 * (radius * radius);
document.write("The Area is: "+ area + "cm square <br>");

//TASK 13
document.write("<h2>TASK 13</h2>");
document.write("<h1>The Lifetime Supply Calculator</h1>");
var favSnack = "Slanty";
document.write("Favourite Snack: "+ favSnack + "<br>");

var currentAge = 19;
document.write("Current Age: "+ currentAge + "<br>");

var estimatedAge = 80;
document.write("Estimated Maximum Age is: "+ estimatedAge + "<br>");

var snacksperDay = 2;
document.write("Amount of snack per Day: "+ snacksperDay + "<br>");

var totalForRest = (estimatedAge - currentAge) * (snacksperDay * 365);
document.write("You will need "+ totalForRest + " " + favSnack + " to last you until the ripe old age of " + estimatedAge + "<br>");
