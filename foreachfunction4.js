// in js function can be passed as a parameter to another function and one function can returned in another function 

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
Here, forEach expects a function as its argument. It will call that function for every element of the array.(when you use forEach, you pass a function reference, not the result of calling the function. That’s why you write print instead of print() this is called callback definition)

You only pass the function name: 
fruits.forEach(print);

But JavaScript internally foreach is defined in such a way:
Example implementation:
Array.prototype.forEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i]);   // here print got value one by one
    }
}
Example usage:
let arr = [1,2,3];
function print(val){
    console.log(val);
}
arr.forEach(print);

👉 The () is added inside forEach, not by us. and JavaScript takes care of calling print() for every element.
So forEach automatically calls print() and passes each element (1,2,3,4,5) as val. */
// Yes, forEach is a function, but more specifically it is an array method in JavaScript.
// That means it is a function that belongs to the Array object.

// is just the name of a parameter (a variable). It stores the function that you pass to forEach.
// It is called callback because: It is a function that is called back later by another function.
// You give a function → forEach stores it → forEach calls it later
// and here anonymous function is assigned to foreach so no name of function in 1st line of internally understanding of foreach where parameter is written directly 








// Instead of that we can direclty write the function inside for each with function name if use normally function we can define name or without name 
arr.forEach(function print(val){
    console.log(val*val);
}) ;  
/*
2. forEach()
Does NOT return anything (returns undefined always whether u put any return statement in foreach it always ignores that and if try to print always return undefined).
You can only work with individual values, perform side effects (like printing, modifying external variables), but you cannot create a new array directly. */
// ; Yes, exactly — for both forEach and map, adding a semicolon at the end is optional, because both are statements but use for good practice.

arr.forEach(function (val){  //here in the form of anonymous function we are using just passing the refrence of this anonymous function to foreach
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