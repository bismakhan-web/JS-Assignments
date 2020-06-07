//CHAPTER 17-20

//TASK 1
var multiArray = [[]];

//TASK 2;
var multiArray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]

for(var i=0; i<multiArray.length; i++){
    
    for(var j=0; j<multiArray[i].length; j++){
        
        document.write(multiArray[i][j] + " ");
    }
    document.write("<br>");
}

//TASK 3
for(var i=0; i<=10; i++){

    document.write(i + "<br>");
}

//TASK 4
var num = +prompt("Enter number of which you want to pprint a table");
var length = +prompt("Enter length of table");

document.write("<b>TABLE OF : " + num + "</b> <br>")
document.write("<b>Length : " + length + "</b> <br> <br> <br>")
for (var i = 1; i <= length; i++) {
    document.write(num + " * " + i + " = " + num * i + "<br>");
}

//TASK 5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var i=0; i<fruits.length; i++){
    document.write(fruits[i] + "<br>");
}
for(var i = 0; i<fruits.length; i++){
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}

//TASK 6
document.write("<h2>Counting</h2><br>");
for (var i = 1; i <= 15; i++){
    document.write(i + ", ");
}

document.write("<br>");

document.write("<h2>Reverse Counting</h2><br>");

for (var i = 10; i >= 1; i--){
    document.write(i + ", ");
}

document.write("<br>");

document.write("<h2>Even</h2><br>");

for (var i = 0; i <= 20; i++){
    if( i % 2 === 0){
        document.write(i + ", ");
    }
}

document.write("<br>");

document.write("<h2>Odd</h2><br>");

for (var i = 0; i <= 20; i++){
    if( i % 2 !== 0){
        document.write(i + ", ");
    }
}

document.write("<br>");

document.write("<h2>Series</h2><br>");

for (var i = 2; i <= 20; i += 2 ){
    
    document.write(i + "k, ");
}

//TASK 7
var A = ["Cake", "Apple Pie", "Cookies", "Chips", "Patties"];
var search = prompt("Welcome to United Bakery ! \r\nWhat do you want to order Sir/Ma'am");
for (var i = 0 ; i < A.length ; i++){
    if (search === A[i]){
        document.write(search + " is <b> available </b> at index " + i + " in our Bakery");
        break;
    }
    else{
        document.write("We are sorry " + search + " is <b> not available </b>  in our Bakery");
        break;
    }
} 

//TASK 8
var arr = [24, 53, 78, 91, 12];
document.write("Array Items : " + arr + "<br>");
var max = arr[0];
for(var i = 1 ; i < arr.length ; i++){
    if (max < arr[i]){

        max = arr[i];
    }
}
document.write("The largest number is : " + max + "<br>");

//TASK 9
var arr = [24, 53, 78, 91, 12];
document.write("Array Items : " + arr + "<br>");
var min = arr[0];
for(var i = 1 ; i < arr.length ; i++){
    if (min > arr[i]){

        min = arr[i];
    }
}
document.write("The smallest number is : " + min + "<br>");

//TASK 10
for (var i = 5 ; i <= 100 ; i += 5){
    
    document.write(i + ", ");
}

document.write("<br>");

//OR

for (var i = 1 ; i <= 100 ; i ++){
    
    if (i % 5 === 0){
       document.write(i + ", ");
    }
}