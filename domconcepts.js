// for js just inspecting and go to console and can print there also 
// first type window and enter and can write like below
console.log(window); // OR directly writes in console and enter
// window object is the global object of the browserwith lots of properties & methods .
// It represents the browser window/tab in which your webpage is running.

// it contains all When you write JavaScript in a <script> tag (or an external file), any variable or function declared in the global scope automatically becomes a property of window.

// like 
console.log("Hello");
window.console.log("Hello2");// both give same as console is also a object of window by default known to js so need to write always window.
/*like 
window.alert("hello bhaiya "); 
alert("hello bhaiuya 2 2 2 2 "); both means same and understood so only writing direct alert 

a=alert("hehehehheheeh");
console.log(a); // bcs alert() blocks the page, returns nothing, and converts any input into a string before showing it.
console.log(alert("sjjsjsjsj")); ✔ console.log(alert("text")) First shows the alert popup After you click OK, it logs:  */

/*
What is DOM?
When a web page is loaded, the browser creates a Document Object Model (DOM) of the page
when web page is loaded then in js all code of html is converted into a object called document in js (so thats why we can access every element of html through js

✅ What happens when a web page loads?
1️⃣ Browser reads your HTML file.

The browser parses HTML from top to bottom.

2️⃣ HTML is converted into a big JavaScript object called the DOM.

This object is called document.(reprsentation of our html code)

✔ The DOM (Document Object Model) is simply your entire HTML converted into a tree-like JavaScript object.

3️⃣ Because HTML becomes a JS object (document), JavaScript can access everything inside the HTML.

example:- 
document.getElementById("title");
document.querySelector(".btn");
document.body;
document.forms[0];

All work because…

✔ HTML → Converted into JS object → stored in document 

🧠 Why is this done?

Because browsers want JavaScript to be able to:

Add/remove HTML elements
Change text
Change colors
Handle events (click, submit, keypress)
Animate elements
Build dynamic UI
So they convert HTML into a JavaScript object structure.

Where does document live?
Inside the global window object.
window
   └── document
So document is a property of window.

That’s why this works:
document.getElementById()
also this :-
window.document.getElementById() 
both are same

Final Explanation (easy to remember)

When a webpage loads:
HTML → turned into JavaScript object
That object = document
Stored inside window
JavaScript can use the document object to access & control all HTML elements.
   */

// can check document object in window by printing window and searching in it u will get list of all ur html tags and can hover through corner left button just like nomral inspect for webpages
console.log(window.document); // by this way u wil get document or direct write window.document or document only in console
//console.log(document);       // prints the document object
//console.log(window.document); // also prints the same document object



/*
console.log()
Shows the object in a “string-like” format.
For DOM elements, it prints them as HTML.

console.log(document.body);

<body> ... </body>


console.dir()
Shows the object as pure JavaScript object with all properties.
Much better for exploring structure.

console.dir(document.body);

HTMLBodyElement {
   children: [...],
   style: {...},
   innerText: ...,
   onclick: ...,
   ...
}  
   

simple console.log for normal printing 
but console.dir for printing method and properties of special object slike document*/

// for accessing all properties of document 
console.dir(window.document); // can write console.dir(document); direclty 

// only remove window as it is known to js(as window is a global object) but not like document.body removing document is not allowed
/*

inside dom tree like 

window 
document 
html 
head                                    body 
meta title link in head             div & script (in body )
                            Image,h1,p,div (child nodes for above div node)


in this tree like structure every individual box is called node 
and every node is object so thats why document object model */

console.dir(document);// another way to acces objects inside document as listed above its just revsion
console.dir(document.body); // can see child nodes inside it also other nodes inside it 
console.dir(document.body.childNodes[1]);// its give u properties of child nodes but for printing as html use console.log

// question is that what to do with these informtion basically it help us to make changes in webpages dynamically html and css once writed saved they cant make chnages in runtime only js can make chnages through dom

// for fast changes we need to learn how to directly write in console 
// 1. simply what u write is printed no need to write console.log eg:- 10+20 then enter ...or console.log(document.body) directly in console document.body then enter gives u html code or for objects inside it use console.dir in console or normal js file
// 2. we can also write full syntax in console also like console.log(7);


// for dynamic changes in web page bg color like 
// document.body.style.background="yellow";then press enter in console this is temporary 
/*
JS file changes = Repeated temporary changes (every reload)
Console changes = One-time temporary changes (lost on reload)

1. DOM changes written in a JS file = Temporary (NOT permanent)*/

console.log(document.body.style.background="yellow");// only chnages dom(means dynamic used for user clicking on button or after form submission)


/*
✅ **DOM changes in a JS file are NOT permanent in the HTML file…
BUT they DO appear again after refresh.**
⭐ Why JS-file changes appear again after refresh?

Because every time the webpage loads, the browser:    
Reads the HTML
Creates the DOM
Runs your JavaScript file
JavaScript again modifies the DOM
So the JS code runs on every page load, which means the DOM gets changed every time.
That’s why after refresh, your DOM still shows the changed result.

✅ Why JS DOM changes are NOT permanent?

✔ Because the actual HTML file never changes.
✔ Because the actual CSS file never changes.
✔ Because JavaScript only changes the DOM in memory, not the files.
✅ Changes happening in RAM (runtime memory), not in the HTML/CSS files.*/

// chilnodes decided in js by itseld as spaces also count as text nodes so it doesnt mean what we write in a sequence stored in the same way we need to check through indices 

/*
✅ How childNodes actually works

childNodes returns all types of nodes, including:
Element nodes (<h1>, <div>)Text nodes (spaces, tabs, newlines) Comment nodes (<!-- comment -->)Script nodes Anything that exists inside the parent So the DOM does NOT store elements in the exact logical sequence you think.
It stores every character, including whitespace, as nodes.  That’s why your indices shift.*/


/*we can do dom changes in this normal js file using normal writing 
1. console.log(document.body.style.background="pink"); here console can be used but not compulsory as in this case 
document.body.style.background = "pink" changes the page. 
console.log(...) prints the value returned by the assignment (here, "yellow") in the console.But this is not standard practice, because you are mixing two things: Action (changing the DOM),Debugging (logging to console)

2. document.body.style.background="brown"; this will direclt changes to the dom

DOM change alone → directly update page, no console.log needed.

DOM change with console.log → works, but mainly useful if you want to see or debug what you did.
Think of console.log as a tool to watch what happens, not as a tool to make things happen.


remainng things are there where console.log and console.dir are used for seeing elements in the console, which helps you understand the structure before making changes only for seeing/inspecting the element.
like console.log(document.body);  gives html code of body as text or shown 
console.dir(document.body); allows to showing all its properties and methods. 

DOM change alone → directly update page, no console.log needed.*/


// In JavaScript (and CSS), if you apply multiple changes to the same property, the latest change overrides the previous one. Yes! ✅ This principle applies to DOM changes in JavaScript, not just CSS..

//console.log(document.body.style.background="yellow"); written above now overwriting through below but yellow printed remain as it is only dom changes update like color (Concept :- Console just shows the value at the time of logging.It does not automatically update when you change the DOM later like below but in down no use console so nothing printed so always use without console for making dom changes.)

document.body.style.background="green"; // if commenting this chanegs made to as of upper that is yellow 
// some more changes
document.body.childNodes[1].innerText="ahahhahahahah"; // if want to know what is in index 1 position just print it in console or here
console.log(document.body.childNodes[1]); // it will give u H1 but in console there is a strong facility shown in advance before printing so use that for quick knowing poistioning of index

// for accesing in console or for checking value at certain index directly can write document.body.childNodes[1]; it wil give what will be at the position 1 but accesing methods inside it or properties you need to write console.dir(document.body.childNodes[1]); then enter 

// revision 
/*
document.body.style.background="orange";
document.body.childNodes[3].innerText="hello subham bhai ji kaise ho ap";

// it is not dom changes so for printing or accesing methods can use console,.log or console.dir
console.log(document.body.childNodes[3]);// this will give u printing as string format or basically html code for h4 or can do like also 
let node = document.body.childNodes[3];
console.log(node); both will same as above will return the nodes not make changes
console.dir(document.body.childNodes[3]); // this wiil give u properties inside h4 
// */


// dom manipulation accessing through different keys 
// 1. selecting with id
document.getElementById("heading1"); // write under "id name"
console.log(document.getElementById("heading1"));
a=document.getElementById("heading1"); 
console.log(a);
/* both are same as document.getElementById("heading1") return the elemnt object a=document.getElementById("heading1");  it means You’re just storing the same returned object in a variable.
console.log(document.getElementById("heading1"));
console.log(a);
Both will print the same DOM element, because a contains the same reference. */

/*
console.dir(window);
console.log(window); same for document also 
🔹 Case 1 — When logging window or document
Both log and dir look identical because Chrome forces a “DOM tree inspector view” for these special global objects. so both will produce same results

🔹 Case 2 — When logging DOM elements like <body> or <div>
| Command                      | What you see                                                     |
| ---------------------------- | ---------------------------------------------------------------- |
| `console.log(document.body)` | shows it as HTML (`<body>...</body>`)                            |
| `console.dir(document.body)` | shows it as a JavaScript object (properties, prototype, methods) |
*/

// “Logs” means writing output to the browser console (inside Developer Tools), not to the webpage.
// Logging = writing a message to the console (Developer Tools), not to the webpage. 
