// this is our for loop execution 
// whenever u are declaraing variable without reserve keyword then they will treated as global variable even if u used it inside a function or loop then in that case we can print i outside the loop etc but if let i=1 then outside loop we cant print i

// let have blocked scoped and const have also blocked scope but if declared outside block or normally then treated as global but cant attached to window like console.log(window.variablename); it will give undefined and var can attached  
// var have functioned scope or if declared outside a function then can be global scope even if u used inside loop(just need is that it should be outside the fn then can in inside in anything this is known as the meaning of functioned scope)treated as global

// The window is the global world → all global variables should live on window so thats why we attach variables to the window but this later on make conflicts like repition etc so now let,var.const used for clearing and maintaining the safer environment


for(let i=1;i<=5;i++){
    console.log("Subham jha ka college"); // console c in small always
}

/*This is how for loop works
✔ Initialization runs only once
✔ Condition is checked before every iteration
✔ Body runs only if condition is true
✔ Update happens after body execution
✔ Loop stops when condition becomes false */ 

// console.log(i); // here u cant access this gives i is not defined as let is blocked scope and also it is defined inside a loop 
// This means each block { ... } creates a separate scope for variables declared with let and same for const 

// while loop 
let j=1;  // define condition in while we can do it separately also like let j; j=1; first declaration and second is assignment.
while (j<=5){
    console.log("hello Subham Jha");
    j++;
}

// do while loop
// its first do means run the loop then check the condition means in do while our code inside body atleast one time get executed 
let k=1;
do{
    console.log("Hii this is do while");
    k++; // it makes k=2 after 1st execution then check below condition that whether 2<5 something different from for loop /*Execute body first,Increment, Condition check, Repeat*/
}while(k<5); // here ; semicolon is needed as in last 


/*
| Keyword | Block Scope | Function Scope | Global Scope | Attaches to Window |
| ------- | ----------- | -------------- | ------------ | ------------------ |
| var     | ❌ No        | ✔ Yes          | ✔ Yes        | ✔ Yes              |
| let     | ✔ Yes       | ✔ Yes          | ✔ Yes        | ❌ No               |
| const   | ✔ Yes       | ✔ Yes          | ✔ Yes        | ❌ No               |

So yes — let and const can be global, but they are not treated exactly like var globals.
*/


















