let n=prompt("Please enter the number u want");
let arr=[];
for(i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr); // this is how to store values from the user in the array upto n elements 
let sum=arr.reduce((acc,curr)=>{
    return acc+curr;
});
console.log(sum);

let factorial=arr.reduce((acc,curr)=>{
    return acc*curr;
});
console.log(factorial);
