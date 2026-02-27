// i++ or ++i means i=i+1 just timing for increament is different like 
// i++ increases later first use original for example:-

let i=1;
let x=i++; //(here internal behaviour works like first x=i then i=i+1)
console.log(x);
console.log(i);
x=i++;
console.log(x);

// same like ==i 
let j=1;
let y=++j; // here how internal works (first j=j+1 then y=j)
console.log(y);
console.log(j);

/* Instant print example
let i = 5;
console.log(i++); // Output: 5  (original value used)
console.log(i);   // Now 6


let j = 5;
console.log(++j); // Output: 6 (updated value used instantly)
console.log(j);   // 6 */


/*
✔ i++ and ++i both increase the value by 1
✔ In a normal for loop (when increment is in the loop header), both behave same — same output

BUT ⬇

🔹 Difference tab dikhta hai jab value usi line me TURANT use ho
jaise:

console.log(i++) → pehle original use, baad me +1
console.log(++i) → pehle +1, turant updated use 



✅ When does the “special behavior” of i++ matter?

It ONLY matters when you directly use the value of i++ somewhere immediately — e.g.:

✔ Printing it
✔ Using it inside an expression
✔ Using it in a condition
✔ Assigning it to another variable


❌ When does it not matter?

In a for loop like:
for (let i = 1; i <= 3; i++) {
    console.log(i);
}
👉 i++ is executed after the loop body finishes
👉 And its returned value is NOT used anywhere
👉 Only the increment side effect matters ( Only the side effect—i increasing by one—matters. not i++ or returned value is used )


// If i++ is used as a standalone statement (e.g., i++;), it behaves exactly the same as ++i (pre-increment), and this "special property" is not apparent. 
// property seen only when i++ is printed or used means i++ used or its returned value is used that is i++ 
*/

// simple khu to in for loop jo i ki value increased hoti hai whi dikhti hai not i++ khi print nhi hota isliye wo nhi show hota
// example :- 
let p=1;
console.log(p++); // think slike x=p++ then printing it
console.log(p);

let q=1;
console.log(++q);
console.log(q);

