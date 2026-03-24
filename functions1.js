// A function is a block of code that performs a task and can be reused anywhere.
// function help us to prevent repetition or redundancy in the code 

// called function definition 
function myFunction(){  // () defines what will be function input
    console.log("Hello to Subham Jha !");
    console.log("We are learning JS");
}

myFunction();  // invoking the function through function_name(); () for calling the function 
myFunction();

// A parameter is a variable inside the function definition that receives values from outside. 

function add_two(a,b){  // a & b are parameters 
 console.log("Sum of Two number is :- ", a+b);
}   // this whole part is called function definition

// Parameter → variable written in function definition
// Argument → real value given during function call

add_two(23,47);  // thsese are arguments 
add_two(59,10);  // this is called function call or function invoke


// function can also return value rather than printing it can dirctly return by using a return keyword 

function add_three(a,b,c){
    return a+b+c;  // we can also write expression in return or can single value but whatever u write it always return a single value whether after calculating that expression or array etc ...we can store expressions in variable then return that variable directly (but take care of that u cant return statements (ex :- return let x = 10;  return if (a > 5) {  console.log("Hi");}), return for (let i = 0; i < 5; i++) { }, return function myFunc() { }  ), we can return strings but within a quote as normal syntax like return "Hello world";

    // A function can execute many statements or expressions inside it, but it can return only ONE value at the end.

    /*function test() {
    return 10;   // this runs
    return 20;   // this NEVER runs
    return 30;   // this NEVER runs }  here after return 10 fucntion stops immediately after a return statement runs, nothing else inside the function is executed.*/
}

//console.log(a); //here u get a is not defined bcs a is function parameters and they are local variables always alive inside the function they do not exist outside the function 
/*
In function parameters, you do NOT use any reserved keywords (let, var, const) to declare variables.

We don’t use let, var, or const for parameters because the function automatically creates those variables to receive input values function automatically declares that variables for receiving inputs that is not like normal declartion of variable(like we declare new variable there we use let, var , const).

✅ Function parameters are automatically treated as local variables

function demo(a, b) { // Using reserve keywords inside function parameters is WRONG. like demo(let a , let b) this is wrong just write direct as they are treated always as local variables but inside function block you should use reserved keyword always

    let c = 10;   // must use let/const/var
    const d = 20;  // must use let/const/var

    return a + b + c + d;
}
    */



// add_three(1,2,3);  function is able to return in this case but we need to store returned value somewhere like below then printing 
a=add_three(1,2,3);
console.log(a);


/*
let and const having blocked scope but if declared outside block treated as normally but cant attached to window (just for info )
and any {} is a block means function also having their block so we can use let and const inside function block but  again there scope is limited to that block as they are blocked scope 

for var it is functioned scope 

function test() {
    var x = 10;
}
console.log(x); // ❌ Error (not global)

If var is declared inside a function → it stays inside that function.
❗ But if var is declared inside a block (if, for, while) but NOT inside a function → it becomes global

if (true) {
    var x = 20;
}
console.log(x); // ✔ Works (global)

| Declared with | Inside function | Inside block only                |
| ------------- | --------------- | -------------------------------- |
| **var**       | Function local  | NOT block local (becomes global) |
| **let/const** | Function local  | Block local                      |
 */

function multiply(x,y){
    mult = x*y;
    return mult;
}

let z=multiply(2,9);
console.log(z);
console.log(mult);



/*
If you declare a variable without var, let, or const, JavaScript creates a global variable.

This is called implicit global variable creation, and it happens even if you write it inside a:

function
loop
if/else
block
*/
// but this is very bad practice of writing code in js we always try to avoid it strictly so in above we can modify our code as below.

// we can use var but always also try to avoid it as it also make bugs in the situation like console.log(a);  var a = 10; bcs it allows redeclaration and assigning a same varaible multiple times 

function multiply_two(p,q){
    let multi=p*q;
    return multi;
}

let d=multiply_two(1000,29);
console.log(d);
// console.log(multi); this gives u error bcs it gives multi undefined bcs of its blocked scope 
//console.log(p);  
//here u get p is not defined bcs a is function parameters and they are local variables always alive inside the function they do not exist outside the function they are functioned scope (parameters of the functions are automatically locally declared variable not required reserve keywords and they are of functioned scope)
/*