/*just like forEach in array ,map() is an array method that:
✅ Loops through the array
✅ Applies a callback function to each element
✅ Returns a new array (very important)
❌ Does NOT change the original array
method or syntax of application is same as foreach just storing in a variable for printing new returned array

parametrs are same as foreach (current value(always start from 0 index or 1st element of the array ),index(always start with 0 until use reduce as in there there is current index),array (array itself)) for map but genrally we use only value for both foreach and map*/
// ; Yes, exactly — for both forEach and map, adding a semicolon at the end is optional, because both are statements but use for good practice.

let arr=[1,2,3,4,5,6,7];
arr.map((val)=>{
    console.log(val*val);
}); // here map is same as foreach returns undefined until u use return in map function and until u use below both should be done use return keyword and storing it variable 
// but if like storing it into a variable then it returns a new array thats the diff bw foreach and map
let result =arr.map((val)=>{
    console.log(val*val);
})
console.log(result);// here map is same as foreach returns undefined until u use return in map function and until u use below both should be done use return keyword and storing it variable 
/*
map() loops through each element of arr.
val represents the current element.
console.log(val * val) prints the square of each value. ✅
BUT: You didn’t return anything from the callback.
map() always returns a new array based on the values returned by the callback.
Since there is no return, the new array is filled with undefined. */

let arr1=[1,2,3,4,5,6,7];
let result1=arr1.map((val)=>{
    return val*val; 
});
console.log(result1);