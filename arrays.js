// arrays :- they allow us to store and manage multiple values under a single variable.(Easy to access values using index,We can use loops,Easily perform operations like:✔ add / remove items,✔ sort,✔ search,✔ combine

/*Arrays in JS are flexible (heterogeneous). 
In general programming theory → Arrays are meant to store same type values
In JavaScript → They can store different types…but storing same type is a good practice in real projects 

generally we try to go with first approach means making array containing elments of same type*/

let heroes=["batman","shaktiman","spiderman","SubhamJha"];
console.log(heroes);
let num_array=[1,2,3,4,5,67,8,9,10];
console.log(num_array);

// 1. property length for array 
console.log(num_array.length); // same length property as similar to strings
console.log(heroes.length); 
console.log(typeof num_array); // object data type (array is a special type of object in which we use indices or indexes not keys just like in object)
console.log(typeof heroes);

// Yes — arrays are mutable in JavaScript ✔️ 
// just like strings we can access arrays through indexes 
console.log(num_array[4]);
num_array[4]=1000; //can make changes to the array directly remove old one means direct replace (means elements can replaced through index in case of arrays not in case of strings) 
console.log(num_array); // new array will be printed now this our new array.
// this is the way to access all the elements of the array through loop 
let ran_array=[1,2,3,4,5,6,7,8,9,10];
for (let i=0;i<10;i++){  // or we can put i<ran_array.length (stopping condition)
    console.log(ran_array[i]);
}

for(let item of ran_array){  // can use for in also but for array for of as studied before standard way or can replace item with any variable name like numbers
    console.log(item);
}

// array methods there are 2 methods first that change original array and secodn that give us new array on chnages they wont interrupt the original array

// 1. methods that dont change the original array 
let veggies= ["potato","tomato","apple","litchi","tomato"];
console.log(veggies);
// push add the elements at the end of the array 
let a=veggies.push("chips"); // push returns length when print 
console.log(a); // this will return new length 
console.log(veggies); // this will return new updated array

// do normal use 
veggies.push("sandwich");
console.log(veggies);

veggies.pop();  // it will delete or pop from the end of the array 
console.log(veggies); // return the new updated array 

// in array push and pop make changes in the original array so that why in this case we got array in which sandwich is removed 
let c=veggies.pop(); 
console.log(c); // if u print pop then it will return removed element

let nums = [2, 3, 4];
let x = nums.unshift(1);  // add element at the start 
console.log(x);    // 4  (return new length of array)

let num4=[2,3,4];
num4.unshift(1);
console.log(num4); // [1, 2, 3, 4] return updated array

let nums1 = [10, 20, 30, 40];
let removed = nums1.shift(); // No, shift() does NOT take any arguments in JavaScript.
console.log(nums1);    // [20, 30, 40]
console.log(removed); // 10 (the element that was removed)
nums1.shift(); 
console.log(nums1); // will give array removed 20 from it 

/*
❓ Why does shift() change the original array even though we store it in a variable?
Because:
👉 shift() is a mutating method
👉 It removes the first element directly from the original array
👉 The removed value is what gets stored in the variable

JS executes the method before returning a value
The variable removed stores the removed element,
but the modification happens on nums directly.

If a method is mutating, it will always change the original array,
no matter if you store its return value in a variable or not. */

// splice is also a method that make changes to the original array 
 
let splice_array=[100,101,102,103,104,105,106,107,108,109];
//console.log(splice_array.splice(2,2,2000,3000));  will give removed or deleted value 
new_splice=splice_array.splice(2,2,2000,3000);
console.log(new_splice); // will give removed or deleted value 
console.log(splice_array);  // will give u the updated array 

/*✔️ You can:
delete more items than you insert
insert more items than you delete
delete items and insert nothing
insert items and delete zero items

let arr1=[1,2,3,4,56,7,8,0];
// arr1.splice(0,4,52,53,54,55);
// console.log(arr1);
// arr1.splice(0,3);  only deleting no inserting
arr1.splice(0,0,100,200); delete 0 items and insert 100,200
console.log(arr1);
// console.log(arr1.length); 
arr1.splice(3);   if dont pass insert and delete only pass starting index then delete all items from that starting index
console.log(arr1);
// 
and many more u can do based on above statements 

*/


// methods do not change the original array 

console.log(veggies.toString());  // it will convert arrays to string it will not change the original array 

let d=veggies.toString(); 
console.log(d);  // it will also give the same result as above basically the changes where there is the removal or addition of elements like in the push or pop 
console.log(veggies);

console.log(veggies.concat(ran_array));
let concat=veggies.concat(ran_array);
// console.log(concat);  both will give same result 

// if u try to write like this veggies.concat(ran_array ); then in next line print console.log(veggies); then it will not give u what u want bcs its return a new array not making chnages in the original one 


console.log(veggies.slice(0,3)); // value at index last means 3 is not included only from 0 to 2
console.log(veggies);

let slice1=veggies.slice(0,2);
console.log(slice1);  // both will same work 
console.log(veggies.slice(1)); // will return value from index 1 to last
console.log(veggies.slice()); // if not provide anything will return full array


let var1="SuhamJhaajjaajjaja";
let sllu=var1.slice(0,5);
console.log(sllu);
console.log(var1);
console.log(var1.slice(0,6));

let hurra=[1,2,3,4,5];
hurra.splice(0,2,1000,2000);
console.log(hurra);






/*
| Code Type                                             | Semicolon after `}`? |
| ----------------------------------------------------- | -------------------- |
| **Statements** (if, for, while, function declaration) | ❌ No                 |
| **Assignments** (variable = function, object, array)  | ✔ Yes                |

genrally when loop anf if statements after } ending no semicolon needed only needed when the block is part of an assignment or expression

const fun = function() {
    console.log("Hi");
}; // Semicolon needed!



always when u are storing something into variable then print that variable or directly print that thing which you want to stored in the variable both will give the same result

let hurra=[1,2,3,4,5];
hurra.splice(0,2,1000,2000);
console.log(hurra); both will give the same result in any condition 

as changes are where there like what happen when apply a particular method to datatype then print datatype separately that are differents na 

let hurra=[1,2,3,4,5];
hurra.splice(0,2,1000,2000);
console.log(hurra); 
this will differ from above code na 


| Situation                   | Original Array? | What variable stores |
| --------------------------- | --------------- | -------------------- |
| `hurra.splice(...)`         | Changed         | Nothing is stored    |
| `let x = hurra.splice(...)` | Changed         | Removed elements     |



rambaan :- 
Mutating method = Always changes original array,
storing or not storing doesn’t matter but if mutable then sometimes printing that method directly with console like in case of pop and push  will give different result as compared to print after applying directly that methods or(==) 1st storing into variable then printing 

but if method is not mutating that means directly use that method inside console or(==) store in a variable then printing

*/

