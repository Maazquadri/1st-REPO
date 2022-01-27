//Default Parameter

// const getInterest = (amount,time,rate=0.1)=>{
//     const result=(amount*time*rate);
//     return result;
// };

// console.log(getInterest(10000, 2));







// const getSum=(num1,num2,...nums)=>{
// // console.log(nums);
// const numsSum=nums.reduce((acc,cur)=> acc+cur);
//     return num1+num2+numsSum;
// }
// console.log(getSum(10,20,30,40,50));



// factory  function:
// function getArea(radius){
//     return{
//         radius;
//     }
// }



// function GetCircleArea(radius){
//     this.radius = radius;
//     this.pi=3.14;
//     this.getArea=function(){
//         return this.pi*this.radius*this.radius;
//     }
//     return this;
// }
// const newObj=new GetCircleArea(10);
// console.log(newObj.getArea());




//constructor function.
// function getMaazArea(radius){
// this.radius=radius;
// this.pi=3.14
// this.getArea=function(){
//     return this.pi*this.radius*this.radius
// }
// return this;
// }
// const newObj=new getMaazArea(10);
// console.log(newObj.getArea());


//factory function:
// function getAreaOfCircle(radius){
//     return{
//         radius: radius,
//         pi: 3.14,
//         draw(){
//             return this.pi*radius*radius
//         }
//     }
// }
// const result=getAreaOfCircle(10);
// console.log(result.draw());


//  function getFullName(firstName,lastName){
//      return{
//          firstName:firstName,
//          lastName,
//          getName(){
//              return `First Name:${this.firstName},Last Name:${this.lastName}`
//          },
//      };
//  }
// const output=getFullName("Maaz","Quadri");
// console.log(output.getName());



function GetFullName(fname,lname){
    this.firstName=fname;
    this.lastName=lname;
    this.getName=function(){
        return `First Name:${this.firstName} Last Name:${this.lastName}`;
    };
    return this;
}
const output= new GetFullName("Maaz","Quadri");
console.log(output.getName());








