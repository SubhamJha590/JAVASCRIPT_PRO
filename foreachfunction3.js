// in js function can be passed as a parametr to another function and one function can returned in another function 

// ⭐ A function that is passed(as a argument) to another function  to be executed later.
// BASIC EXAMPLE OF CALLBACK 
/*
function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Shubham");
}

processUser(greet);

Explanation:greet is passed as a callback,processUser calls it later
Output:Hello Shubham   */

// lets talk about foreach 
// forEach is a built-in array method in JavaScript that is used to run a function once for every element in an array.
/*
forEach uses a callback function internally.
You pass a function to forEach
The array calls your function once for every element
So the function you pass is a callback */

/*
forEach loops through the array
For each element, it calls your callback function
It passes parameters:(current value(always start from 0 index or 1st element of the array ),index(always start with 0 until use reduce as in there, there is current index),array (array itself)) as the parameters means you can define any paramter in this format or variables(You can name these parameters ANYTHING like (arr.forEach(function(val, idx, ar){
    console.log(val, idx, ar);
});
)) */

let arr=[1,2,3,4,5];

function print(val){
    console.log(val);
}
arr.forEach(print);
/*
✅ Why don’t we write print() ourselves?
Because forEach calls the function for us

You only pass the function name: 
fruits.forEach(print);

But JavaScript internally does something like this:
for (let i = 0; i < arr.length; i++) {
    print(arr[i]);   // <-- this is where callback is called
}
👉 The () is added inside forEach, not by us. and JavaScript takes care of calling print() for every element. */



// Instead of that we can direclty write the function inside for each with function name if use normally function we can define name or without name 
arr.forEach(function print(val){
    console.log(val*val);
}) ;  
/*
2. forEach()
Does NOT return anything (returns undefined always whether u put any return statement in foreach it always ignores that and if try to print always return undefined).
You can only work with individual values, perform side effects (like printing, modifying external variables), but you cannot create a new array directly. */
// ; Yes, exactly — for both forEach and map, adding a semicolon at the end is optional, because both are statements but use for good practice.

arr.forEach(function (val){  // here also we can write like this no need to declare function name as it automatically calls inside internally 
    console.log(val*val);
});

/* This is internal excution for the above code just watch no need to go in deep just remeber a simple thing if using normal function can use fn name or cannot based on our choice same in arrow function no need to store into a variable direct excution of arrow fn it automatically calls

Step 1 internal execution 

Array.prototype.forEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

✅ Step 2: Your code

let arr = [1, 2, 3, 4];

arr.forEach(function (val){
    console.log(val * val);
});

✅ Step 3: What actually happens internally
The forEach function internally does:

callback(1, 0, arr)  → prints 1
callback(2, 1, arr)  → prints 4
callback(3, 2, arr)  → prints 9
callback(4, 3, arr)  → prints 16

⭐ Full combined demonstration (internal + your code)
Array.prototype.forEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

let arr = [1, 2, 3, 4];

arr.forEach(function (val){
    console.log(val * val);
});


*/

// this is the execution for foreach using arrow fn 

arr.forEach((val)=>{ // can remove parenthesis from val as there is single input
    console.log(val*val*val);
});


/* internally 
Array.prototype.forEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

let arr = [1, 2, 3, 4];

arr.forEach((val)=>{
    console.log(val * val * val);
});
*/

// for interviews of js they ask for higher order fn or methods and this is foreach method that is higher order fn or method (which takes another function as parmter or return another function)
// or whenever u see a callback that is called higher order fn or method