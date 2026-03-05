// Conditional statements 

let marks=300;

// 1. if block
if (marks>=30){
    console.log("You are passed");
}
// if is independent not required else, if is itself a complete block will run only when condition becomes true if nothing is defined in else block nothing will show when if condition doesnt matches

// 2. if-else block
if (marks>20 && marks <50){
    console.log("exact in between 20-50 marks is calculated");
}
else{
    console.log("Not calculated as expected");
}

// 3. if elseif else block

age=18;
if (age===10){
    console.log("You are above 10");
}
//else if block only runs when the original if condition is false AND its own condition is true.
else if(age>10 && age===18){
    console.log("You are eligible to vote");
}
// The else block runs only when all previous conditions are false, including:The if condition is false All else if conditions (if any) are also false
else{
    console.log("You are above criteria");
}

// can use multiple if without using else or else if 

console.log("from here ternary opeartors are in the game ")

// condition ? true output : false output
name1="23";
result= (name1===23)? "Yes name matches" : "Not matches";
console.log(result);
// here not matches if use === but if use == matches 



// but this prompt is only in console terminal not for node js terminal because prompt is a browser api not run in outsude terminals like node js 

// this is how to take a input from user through prompt fn using prompt("any message"); if in string then "" if number then direct and can store it in a variable
input=prompt("enter a number");// anything written inside prompt is visible to prompt just to give a idea
console.log(input);

// prompt always return a string so for number we need to convert it in using Number (capital N)

input1=Number(prompt("enter the number1"));
input2=Number(prompt("Enter the number 2"));
console.log(input1,input2);

// for checking the type of datatype we use typeof (typeof is a unary operator used to check the data type of a value.)
// can put direct in front of any datatype for checking the data type 
console.log(typeof input1);  // its type is number
input3=prompt("Enter number 3 ");
console.log(typeof input3);  // its type is string



// for type casting always use Big letter starting
ranom=String(29);  
console.log(ranom);
console.log(typeof ranom);

// we can write mutliple things in console.log("heloo",28,"shshhssh"); just by having comma with it 