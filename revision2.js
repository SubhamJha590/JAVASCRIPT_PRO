age=18;
if(age>=18){
    console.log("You are eligible to vote");
}
else if(age<18 && age>0){
    console.log("you are below 18")
}
else{
    console.log("You are not elgoible to vote");
}


let i=1;
console.log(i++);// if printed then use first original value then later updated
console.log(i);
console.log(++i);// it immediately increaments the value
console.log(i);


for(let i=1;i<=5;i++){
    console.log("Subham JHa is the true lover");
}

let j=1;
while(j<5){
    console.log("SubhamJha");
    j++;// is a statement and statement in js no need to print them for running thry run by itself like return, if and else etc 
}

let z=1;
do{
    console.log("SubhamJhais tomato eater");
    z++; // *Execute body first,Increment, Condition check, Repeat*/
}while(z<5);

// remember about scope of let, var and const 


// for of loop for strings and arrays 
let str1= "Subham Jha";
for(let val of str1){
    console.log(val);
}
let arr1=[1,2,3,4,5];
for (let val of arr1){
    console.log(val);
}

let obj1={
    name1: "Ramkrishna",
    age:28,
    isstudent: true
};
for (let val in obj1){
    console.log(val ,"=",obj1[val]);// here normal access obj1[keysvariable thats here us val]
}


function multi(x,y){ // x & y always treated as local no need to use reserve keywords they are fixed
     let multiofboth=x*y;
     console.log(multiofboth);
     return multiofboth;
}
result=multi(10,383883);
console.log(result);

function greet(){
    console.log("Hello Subham Jha");
}
greet();

// Arrow functions 
// generally use const for arrow functions 

const value1= (x,y)=>{ // from here (x,y) rhs part is starting ehich is arrow fn
    return x*y;
}
let f=value1(10,373);
console.log(f);

// when one statement only it directly returns that statement no need to put curly braces
const greet2 =() => console.log("Good morning bro");
greet2();

// when one statement only it directly returns that statement no need to write return keyword it is called implicit return by aroow function when there is only one statement 
const add= (a,b)=> a+b;
let store_add=add(20,30);
console.log(store_add);

// when only one paramter so can write it directly without parenthessi()
const square1=x=>{
    return x*x;
}

let store_square =square1(3);
console.log(store_square);

// it returns direclty a statemnt if there us only single line statement in the code 

/*
let arr=[1,2,3,4,5,6];
let amaze=arr.forEach(val=>{
    return val*val;
});
console.log(amaze); always return undefined for excution done like below*/

let arr=[1,2,3,4,5,6];
let amaze=arr.forEach(val=>{
    console.log(val*val);
});

// its parameters are always val,idx,arr 

arr.forEach(function print(val){  // can take any name in place of val like x
    console.log(val);
})

function print_cube(x){
    console.log(x*x*x);
}
arr.forEach(print_cube);

let new_filtered_array=arr.filter(val=>{
    if(val%2==0){
        return true;
    }
    else{
        return false;
    }
})
console.log(new_filtered_array);

neew_array=[23,46,345,24,56,644];
let returned_reduce= neew_array.reduce((acc,curr)=>{
    return acc+curr;
});
console.log(returned_reduce);

let max_value=neew_array.reduce((acc,curr)=>{
    if(acc>curr){
        return acc;
    }    // can also solve using ternary opeartor
    else{
        return curr;
    }
});
console.log(max_value);


let custom_array=[1,2,3,4,5];
let map_array=custom_array.map(val=>{
    return val*val;
});
console.log(map_array);