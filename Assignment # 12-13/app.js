//CHAPTER 12-13

//TASK 1
var input = prompt("Enter any character");
if(input >= '0' && input <= '9'){
    console.log("Input value is a number");
}else if(input >= 'A' && input <= 'Z'){
    console.log("Input value is Uppercase Letter");
}else if(input >= 'a' && input <= 'z'){
    console.log("Input value is Lowercase Letter");
}else{
    console.log("Please Enter a valid input");
}

//TASK 2
var int1 = +prompt("Enter first integer");
var int2 = +prompt("Enter second integer");
if(int1 > int2){
    console.log(int1 + " is greater than " + int2);
}else if(int2 > int1){
    console.log(int2 + " is greater than " + int1);
}else if(int1 === int2){
    console.log("Both integers are equal");
}else{
    console.log("Invalid input");
}

//TASK 3
var number = +prompt("Enter any number");
if(number > 0){
    console.log("Positive number");
}else if(number < 0){
    console.log("Negative number");
}else if(number === 0){
    console.log("Number is zero");
}else{
    console.log("Invalid input");
}

//TASK 4
var char = prompt("Enter any character");
var toLower = char.toLowerCase();
if(toLower === 'a' || toLower === 'e' || toLower === 'i' || toLower === 'o' || toLower === 'u'){
    console.log("True");
}else{
    console.log("False");
}

//TASK 5
var password = "bisma123";
var inputPassword = prompt("Enter Password");
if(inputPassword === ""){
    
    inputPassword = prompt("Please enter your password");
    
    if(password === inputPassword){
        alert("Correct! \r\nThe password you entered \r\nmatches the original password");
    }
    else{
        alert("Inccorect Password !");
    }
}else{
    if(password === inputPassword){
        alert("Correct! \r\nThe password you entered \r\nmatches the original password");
    }
    else{
        alert("Inccorect Password !");
    }
}

//TASK 6
var greeting; 
var hour = 13; 
if (hour < 18){ 
    greeting = "Good day";
}else{ 
     greeting = "Good evening";
}

//TASK 7
var time = +prompt("Enter time in 24 hours clock format");
if(time >= 1300 && time <= 2400){
    if(time === 1300){
        console.log("The time is 1pm");
    }else if(time === 1400){
        console.log("The time is 2pm");
    }else if(time === 1500){
        console.log("The time is 3pm");
    }else if(time === 1600){
        console.log("The time is 4pm");
    }else if(time === 1700){
        console.log("The time is 5pm");
    }else if(time === 1800){
        console.log("The time is 6pm");
    }else if(time === 1900){
        console.log("The time is 7pm");
    }else if(time === 2000){
        console.log("The time is 8pm");
    }else if(time === 2100){
        console.log("The time is 9pm");
    }else if(time === 2200){
        console.log("The time is 10pm");
    }else if(time === 2300){
        console.log("The time is 11pm");
    }else if(time === 2400){
        console.log("The time is 12pm");
    }
}else{
    console.log("Invalid time");
}