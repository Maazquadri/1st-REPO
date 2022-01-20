// const arr=[1,7,8,3,4,9,2,5,1];

// const sum=arr.reduce((acc,curr)=> acc+ curr);

// console.log(sum); (plus krne ke liye)

// const arr=[1,7,8,3,4,9,2,5,1];

// const sum=arr.reduce((acc,curr)=> acc+ curr*curr*curr);

// console.log(sum); (cube nikalne ke liye)

// const arr=[1,7,8,3,4,9,2,5,1];

// const sum=arr.reduce((acc,curr)=> acc+ curr**3);

// console.log(sum);
const arr=[1,7,8,3,4,9,2,5,1];

const sum=arr.reduce((acc,curr)=> acc+Math.pow (curr,3));

console.log(sum);
