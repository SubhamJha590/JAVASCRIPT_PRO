// So, if you are running JS in a browser:
// You must attach it to an HTML file, because:
// HTML provides the structure and screen to show output.
// JS is loaded into the page through a <script> tag.
// Without HTML, there’s no webpage to show any result visually.

// connsole is the area of browser on which js code run and we attach it with html and html is directly attached to browser so this is an indirect way to attach js with browser


// can use single or double quote for printing 
// its good practice to use ; at the end of line just like css 
console.log('Hii my name is subham Jha');
console.log("Hii dude how are u this is sjha empire");
// in js no need to define datatype before variable declaration
// variables are also case sensitive and see other rules in notes normal and reserved keywords like console  genrally use camel case for writig variable name fullName first letter small and other is big this is camel case used in most syntax
age=24;   // = is my assignment operator
console.log(age);  // this is integer datatype value
name1='SubhamJha'; 
console.log(name1);
price=190.23;    // this is float datatype
console.log(price);
x=null;  // null data type means variable is declared but value is nothing
console.log(x);
y=undefined;  // it means variable is declared but value yet not defined or assigned 
console.log(y);
isfollow=false; // boolean data type or can be true or false in small letter (maxm in single word or for  double word there is camel case)
console.log(isfollow);

// genrally we need and important to use a reserve keyword in front of variable Name
// what if we not use keyword in front of variable Name then  
// JavaScript automatically creates a variable in the global scope.
// Accidental global variables — can overwrite existing variables or cause bugs.
// Strict mode errors (Strict mode is a special mode in JavaScript that makes your code run in a safer, stricter, and cleaner way.
//You enable it by writing this line at the top of a script or function:
//"use strict";


// so try to use as possible there are 3 keywords 
// 1. var:- can be redeclared & updated. a global scope variable
// 2. let :- variable cannot be redeclared but can be updated. a block scope varriable.
// 3. const :- variable cant be redeclared or updated . a block scope variable  

// avoid always use of var as it creates confusion in big codes as it allowed redclaration and give errors so always use let and const based on need 
let fullname ="SubhamJha"
console.log(fullname);

