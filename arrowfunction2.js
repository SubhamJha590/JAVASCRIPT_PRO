// sum function
function sum(a,b){
    return a+b;
}
let z=sum(1,2);
console.log(z);

// This is called arrow functions writing way synatx no space between =>

// here arrow function is the rhs part starting from (a,b)...
const sum1= (a,b)=>{   // here const sum1 here it is a variable which is storing the function (and name of this variable treated as same as name of function for calling and all as for calling and argument passing we need function name so thats why we define in normal function as well as in arrow functions otherwise later we study there are some callback function that automatically call itself there is no need of function there directly using arrow function for clean and clear code )
    return a+b;  // calling of function in this case is same as the normal function
}
let d=sum1(17,13);  // again u need to store returned value all is same like old function just definition synatx different the change is that just storing a function inside a variable and remaining all same function call and return etc etc and can also store other value also just replace const with let 
console.log(d);
console.log(sum1);

// using const for arrow functions is highly recommended
// having basic form 

const greet = ()=>{
    console.log("hello subham jha ");
}  

greet();

/*
In arrow functions, if the function body has only a single expression, you can:
Remove the curly braces {}
Remove the return keyword — it’s implicit
This is called concise body syntax. */

const morning = () => console.log("Good morning subham Jha");
morning();

// having one paramter 

const square = x =>{
    return x*x;
}
 let f= square(9);
 console.log(f);


 // implicit return when there is only one statement 

 const addu=(a,b)=> a+b;
 
 let g=addu(10,200);  // again u need to store returned value all is same like old function just definition synatx different 
 console.log(g); // when ther is only one statement it directly returns that 
 