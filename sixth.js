console.log("Some more loops in js from here ");
// 1. for of loop and 2. for in loop 
// these loops help us to iteration over some special data types 

/*1. for of loop synatx :- for (let val(item) of strVar(iterable)){ 
    do some work
};   for...of is used to loop through values of an iterable object like:
Arrays,Strings,Maps,Sets,NodeLists (Browser DOM),Typed Arrays It gives you each value directly (not indexes).*/

let str1="SubhamJha";
for (let val of str1){  // this loop already knows from where to start and end 
    console.log(val);
}

let size=0;
let str2="subhamdon";
for(let item of str2){
    console.log(item);
    size++;
}
console.log(size); 

// but for of loop is mainly for strings and arrays or above mentioned not for objects data type for object datatype we use for in loop 
/*syntax :- for (let key in objvar){
    do something
}; */

let obj1={
    name1 : "subham Jha",
    age : 28,
    isstudent : true  // t is small 
};

for(let key in obj1){ // can put any name in place of key like i,j its understood that its always key in object but ojcect name should be same as declared
    console.log("keys = ",key,"values =",obj1[key]); // here if u try to find through dot notation(like obj1.key) then it will try to find as it is which will not get and in sqaure brackets (like obj1['key']) not put quotes then again same issue as key here is a variable that stores value of keys in it and item before of in for of loop also a variable that stores iterable things simply write obj1[key] it will auomatically put and print all possible values of key.
};

// for in loop is also used for indexes of array (its mainly for keys and indexes not values but we can use the key to access the value. 
// Yes, we can get values of an object using for...in, but first it gives the key and then we access the value using object[key].
// for...of → loops through values one by one 
// for...in → loops through keys/indexes one by one)

let arr1=[10,20,30,40,50];
for(let index in arr1){
    console.log(index);// it will return indexes of each element
}

// after this go to functions 