// filter() is an array method that:
// Loops through an array
// Applies a callback function to each element
// Returns a new array containing only the elements that satisfy the condition
// Does not change the original array

// filter() loops through each element of the array.
// For each element, you return a condition that evaluates to true or false.(using if-else or comparison operators which gives output in boolean)
// And since return can return any value, including true/false, it is perfectly valid. so thats why Yes — returning a condition is 100% valid in JavaScript. 


// Only elements where the condition returns true are included in the new array. this is the working of filter 
// Original array stays unchanged.

// method or syntax of application is same as foreach just storing in a variable for printing new returned array

// Exactly! ✅ For filter(), the callback function must return a boolean value (true or false) for each element.

// parametrs are same as foreach (current value(always start from 0 index or 1st element of the array ),index(always start with 0 until use reduce as in there there is current index),arraya (array itself)) for map but genrally we use only value for both foreach and map and filter 

let arr=[1,2,3,4,5,6,7];
let result=arr.filter((val)=>{
   if(val%2===0){
    return true;
   }
});
console.log(result);

// or another way to write 
let result1=arr.filter((val)=>{
    return val%2===0; // returns only that value to the new array which gives true for this condition 
});
console.log(result1);

// reduce 
// Purpose: Reduce the array to a single value (number, string, object, etc.) by applying a function to each element.
// It executes a function on every element of an array and returns a single final value before that it have an accumulator and current value keep updating accumulator value updated after each iteration through the fn or assign value or updating again and again to accumulator after each returned value through iteration.
// original array is not changed 

/*paramters :- (accumulator,current value ,current index , array) and method of application or synatx or way to write is same as of map,foreach and filter

accumulator → The accumulated value returned by the previous iteration.
Starts at initialValue if provided.
If no initialValue is provided, it starts as the first element of the array.

currentValue → The current element being processed.
Starts at first element if initialValue is provided.
Starts at second element if no initialValue is provided.

currentIndex → The index of the current element.
Starts at 0 if initialValue is provided.
Starts at 1 if initialValue is not provided (because first element becomes accumulator).

array → The original array. Constant for all iterations.*/

// generally not giveanything like intial value etc direct write accumulator , curretn value 
let arr_new=[1,2,3,4];
let result_new=arr_new.reduce((acc,curr)=>{
    return acc+curr; // gives output in single value (return storage also needed)
});
console.log(result_new);  //generally here acc got 1st value as no initial value is provided 
// and current value starts at 2nd elemnt as no initial value provided so accumulator capture first element 
// here acc got at last value 10 after that no value remains for curr acc got printed

// now for maxm element from the array using reduce
let array_large=[28,278,1902,192,9293,2993,8384];
let largest =array_large.reduce((acc,curr)=>{
    if(acc>curr){
        return acc;  // it automatically checks and apply this callback fn for each element internally and at last when acc got some value and curr some by doing this at last again compare that satisfy return that if acc>curr then return acc else curr 
    }
    else{
        return curr;
    }
});
console.log(largest);


/* INTERNAL WORKING FROM HERE 
Internal Working Step-by-Step
### Step 1
acc = 28, curr = 278
Is 28 > 278? → ❌ No
So return curr = 278
Now acc = 278

Step 2
Next element:
acc = 278, curr = 1902
Is 278 > 1902? → ❌ No
Return 1902
Now acc = 1902

Step 3
Next:
acc = 1902, curr = 192
Is 1902 > 192? → ✔ Yes
Return 1902
Now acc = 1902

Step 4

Next:
acc = 1902, curr = 9293
Is 1902 > 9293? → ❌ No
Return 9293
Now acc = 9293

Step 5
Next:
acc = 9293, curr = 2993
Is 9293 > 2993? → ✔ Yes
Return 9293
Now acc = 9293

Step 6
Next:
acc = 9293, curr = 8384
Is 9293 > 8384? → ✔ Yes
Return 9293
Now acc = 9293
🎉 Final Output
largest = 9293
*/

// OR CAN DO LIKE THIS ALSO 
let arrey=[1,2,4,5,75,46];
let larg=arrey.reduce((acc,curr)=>{
    // we can use ternary opeartor in js with return also 
    return acc>curr? acc : curr;
});
console.log(larg);

// question is there how continuosly returned value becomes the new accumulator 
// ans  this is called the behaviour of reduce in js The main purpose of reduce() is: To keep a single running value (accumulator) while looping through the array.
/*accumulator = something
array loop → update accumulator each time
return accumulator at end

But how should the accumulator update?
👉 By using the result of your callback function.

🔥 2. Why the return value becomes the new accumulator

Because reduce is defined (in the official JavaScript spec) to do EXACTLY this:
accumulator = callback(accumulator, currentValue)
This line is the core of reduce.
Every iteration, reduce does:
Call your function
Take whatever you returned
Assign it back to acc*/

// we can use return with any expression like with comparison operators return a>b; etc or any expression that returns a value js check the expression that a>b if true which means true is the value of the expression just like we printed onsole.log(a>b) same way it return true 

let babu=[1,28,3993,282,2,28,282];
let babi=babu.filter((val)=>{
    return val>90;   
});
console.log(babi);

let sg=Number(prompt("enter the number"));
console.log(sg);
console.log(typeof sg);  // naN means not a number 

// can print factorial also using return acc*curr;
