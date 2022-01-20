// const arr= [1,7,8,3,4,9,2,5,1];
// let max=0;
// arr.forEach((Element)=>{
//     max=Element > max ? Element : max;
// });
// console.log(max);
const arr= [1,7,8,3,4,9,2,5,1];
let max= arr[0];
arr.forEach((Element)=>{
    max=Element < max ? Element : max;
});
console.log(max);
