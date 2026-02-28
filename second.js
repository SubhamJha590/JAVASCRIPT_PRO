// can run multiple js files in single html page just remeber the seqence so i write multiple js files for separate learning can run while attaching separately or simlutaneously 

// Primitive Types : 
// Number, String, Boolean, Undefined, Null, BigInt(see below)
//  (example :- let x= Bigint("123");(capital B) if print typeof x u will get bigint and at last of 123 u go t a small n for Bigint), Symbol (example :- let y= Symbol("hello"); more about these on gpt (A symbol is just a unique identifier)) we can't mix any datatypes with each other without casting or conversion (A symbol is just a unique identifier)) we can't mix any datatypes with each other without casting or conversion
// JavaScript has just one numeric data type called Number , and it represents both:
// Integers → e.g., 10, -5, 1000
// Floating-point numbers → e.g., 3.14, -0.5, 2.71828
// js have also Bigint for large numbers 
let num=28; // num can be -ve also ,floating,infinite,0,-0 etc
console.log(num);

let undef; // undefined means variable is decalared but value is not assigned
console.log(undef);

let null_first=null; // variable is decalred and value is null
console.log(null_first);

console.log("120"+1); // it will give 1201 means string concatenate with each other (+ operator does concatenation if any operand is a string.
// The + operator performs string concatenation if either operand is a string, converting the other operand to a string. Other arithmetic operators like -, *, and / perform numeric coercion(is a type of type coercion) and return NaN if the string cannot be converted to a number.

// Type coercion(it is implicit in nature done by itself) in JavaScript is the automatic or manual conversion of a value from one data type to another. and it is done bydefault in the case of -,/,* )
// type conversion(explicit) is manually 

console.log("120"-1);
console.log(Number("17")+17);// otherwise default behavior of number with string and + operator is concatenate (+ operator is special If either operand is string → concatenation Otherwise → numeric addition)
// | Expression  | Result   | Why               |
// | ----------- | -------- | ----------------- |
// | `"120" + 1` | `"1201"` | concatenation     |
// | `"120" - 1` | `119`    | numeric coercion  |
// | `"abc" - 1` | `NaN`    | conversion failed |
// | `"abc" + 1` | `"abc1"` | concatenation     |







// Non-primitive datatypes :- Object 
// Object is a collection of key-value pairs.
// You can store multiple related information in one single structure.

// an object can conatin strings, numbers,boolean,arrays,functions,null/undefined etc 
// generally we use const for creating object variables but can use let also 

let student = {
  name: "Aman", // If the key is a valid identifier (letters, digits, _, $, and does not start with a number same rule apply for variables name also when declaring in js), quotes are optional no need to put quotes on key it only Needs quotes ( when key is start with spaces, hyphens, special characters, starting with number, reserved words) and for accessing not use quotes when accesing through dot notation but compuslory when access through sqaure brackets notation:. as dot natation as it is find key name and matches not quotes are counted in it but while in square bracket notation the key is inside quotes just like accessing through keys in dictionary of python it search inside quotes and then matching its a syntax for it 

  // and for values quotes can be or not just depend on datatype like for string it is used or for number it is not used 
  age: 21,
  isStudent: true
};
console.log(student);

// ✔ name, age, isStudent → Keys / Properties
// ✔ "Aman", 21, true → Values
// arrays and functions later studied comes under this category also 

// accessing elements in the object through two ways 
// 1. accessing through dot notation of key 
console.log(student.name); // .keys
console.log(student.age); //.keys
// 2. accessing through square brackets and keys inside in it and quotes are compulsory outside the key single or double any
console.log(student['name']);
console.log(student['age']);

// or can make changes inside object also 
student['age']=student['age']+1; // or direct assign new valuye like student["age"]=50
console.log(student["age"]);
student["name"]="rahuldon"; // and these chanes also reflect in original object 
console.log(student["name"]);
console.log(student);


//for single line comment //
//for multiline comment /* content */


// operators in js :- Used to perform some operation on data
// 1. Arithmetic opertor (+,-,*,/,%,**,unary operators -> a++,a--,++a,--a)
// a++,++a = a+1 and a--,--a = a-1 just timing differ and some little special changes later studied    

// 2. Assignment opeartors = += -= *= %= **=

// 3. Comparison operaots Equal to == (only check content not the type)
// Not equal to !=
// Equal to & type === (ever used)
// Not equal to & type !==
// >, >=, <, <= etc.

// 4. logical opeartors (just like logic gates)
// Logical AND &&
// Logical OR ||
// Logical NOT !

// (Both comparison operators and logical operators in JavaScript return Boolean values — either true or false.)

console.log("from here operators concepts are going on ")

let num1=23;
let num2=27;
let num3=num1+num2;
console.log(num3);


let z=50;
z+=5;
console.log(z);
z*=10;
console.log(z);

//post and preincreament operators learned in fourth.js

y=200;
w="200";
console.log(y==w); // it only checks content not datatype -- gives True
console.log(y===w); // it checks for data type also  -- gives False


m= true;
n=false;
console.log(m&&n);  // false
console.log(m||n);  // true
console.log(!m);   // false




// some extra 
// bigint used
// ✅ Method 1: Add n at the end (most common)
// (1st way) let big = 12345678901234567890n;
// console.log(big);

// ✅ Method 2: Using BigInt() function
// let big = BigInt(12345678901234567890);
// console.log(big);
// ⚠️ If passing a very large number, prefer string:
// let big = BigInt("12345678901234567890");
