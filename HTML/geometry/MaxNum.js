// const arr=[2,4,1,5,7,3,12,1];

// const max=arr.reduce((acc,curr)=>(acc > curr ? acc : curr))
// console.log(max);

const str="I am travelling to Hyderabad from Nanded.";

const max=str.split(" ").reduce((acc, curr) =>(acc.length >curr.length?acc:curr))

console.log(max);