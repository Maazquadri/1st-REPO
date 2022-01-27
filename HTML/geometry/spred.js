// const obj = {value:2};
// const arr = [1,2,3,5,4];

// const Maaz = {...obj, maaz:5, same:"maaz"};
// console.log(Maaz);

const chudail={name:"lallu"}
const arr=[2,4,6,8,10];
const arr2=[1,3,5,7,9];

const maaz=[...arr,...arr2,{...chudail}];
console.log(maaz);