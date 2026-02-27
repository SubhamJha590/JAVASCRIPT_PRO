// here we are going to discuss about strings in js 
let str="SubhamJha"

// strings have inbuilt properties and functions (methods) 

// some properties 1st 
console.log(str.length); // for length
console.log(str[2]);  // accessing through index started from 0 always

// Template literals :- these are called strings written inside backticks(``) 
// 1. these allow multiline supoort to strings 
// 2. String Interpolation (Insert variables easily) Use ${ ... } to insert variables or expressions inside strings.


let str3=`hello boss how are you 
kssmsm sjajja akak ak a ak akk 
snsksms skllsl sls sll s sl slslsl `
console.log(str3);  // if u check typeof str3 it will be string

obj={
    name:"pen",
    price:10
};
console.log(`The cost of ${obj.name} is ${obj.price} and also ${1+2+3} can add expressions`); // this is called string interpolation for interview (To create strings by substitution of  placeholders(expressions) in this first value is calculated inside expression the it becomes part of string just like her ${1+2+3})

// escapecharacters(\n,\t,\"\",\'\') used for strings or while printing strings 
let str_new="Hello \tSubham Jha \n  z"; // \n for new line \t for tab space
console.log(str_new, "Hello ram\n ji ");
console.log('Hllo \'babu\' ji '); // used when to put '' colon on text when started strings with ''
console.log("sjjsj sj sj \"ghhzjzj\" sjjs jsj ");  // used when to put "" colon on text when started strings with ""
console.log("Hello 'subham' jha");
console.log('Hello "pyarri don" ji');

console.log("from here methods related to strings These are built-in functions to manipulate a string");

// A block of code that performs a specific task. :- Functions 
// A function that belongs to an object or class. :- Method

// strings in js are immutable when something is immutable, it’s better to apply a method first and then print the result separately (rambaan technique and opposite for mutable items)
// methods name always write in camel case (First word starts with a small letter,Each next word starts with a Capital letter,and no spaces between words.)
let str_new1="  subhamJha is the super boy  ";
let str_upper=str_new1.toUpperCase();
let str_lower=str_new1.toLowerCase();
let str_strip=str_new1.trim();
console.log(str_upper);
console.log(str_lower);
console.log(str_strip); //White spaces from starting and ending are removed
console.log(str_new1); // it means strings are immutable or these methods dont chnange the original string these always gives a new string 
// str.length is a property that gives a value so directly like str.length no parenthesis only defined using dot but above these are methods or inbuilt functions which do some work so need parenthesis along with dot.

// Dot operator is used to access a property or method of an object through which it is defined.

console.log(str_new1.toUpperCase()); // can also do like this 
console.log(str_new1.slice(0,4)); //for slicing with initial and final values given
let str_replace=str_new1.replace("s","k"); // for replace only first occurence of letter or word that u want to replace
let concat=str_replace.concat(str_new1); //concateation
console.log(concat);
console.log(str_replace); 
console.log(str_new1);
console.log(str_new1.slice(0,8)); // this way also correct
console.log(str_new1.replaceAll("s","z")); // it replace all the character or words that u want to replace 
console.log(str_new1.charAt(5)); // it returns the character at index 5

// again strings are immutable so chnaging like this str-new1[2]="zxa"; is not possible u need to use replace method \


/* rambaan :- 
Mutating method = Always changes original array,
storing or not storing doesn’t matter but if mutable then sometimes printing that method directly with console like in case of pop and push  will give different result as compared to print after applying that methods directly or(==) 1st storing into variable then printing 

but if method is not mutating that means directly use that method inside console or(==) store in a variable then printing
 */