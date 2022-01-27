// function GetPersonDetails(fname,lname){
//     this.firstName=fname;
//     this.lastName=lname;
//     this.tags=[5,10,15,20,25];
//     this.getDetails=function(){
//         const result=this.tags.forEach((elem)=>{
            
//                 console.log(`${this.firstName}${elem}${this.lastName}`);
//             });
        
//     };
// }
// const myname = new GetPersonDetails("Maaz", "Quadri");
// console.log(myname.getDetails());




// function Maaz(){
//     console.log(this);
// }
// Maaz();





// const movies ={
//     firstName:"John",
//     lastName:"Wick",
//     tags: [5,10,15,20,25],
//     getFullName(){
//         const self=this;
//         this.tags.forEach(function(elem){
//             return console.log(self.firstName+" "+elem+" "+self.lastName);
//         });
//     },
// };
// const result=movies.getFullName();
// console.log(result);


// const movies ={
//     firstName:"John",
//     lastName:"Wick",
//     tags: [5,10,15,20,25],
//     getFullName(){
//         // const self=this;
//         this.tags.forEach(function(elem){
//             return console.log(this.fname+" "+elem+" "+this.lname);
//         }.bind({fname: "Wick", lname:"john"})
//         );
//     },
// };
// const result=movies.getFullName();
// console.log(result);




const movies ={
    firstName:"John",
    lastName:"Wick",
    tags: [5,10,15,20,25],
    getFullName(){
        // const self=this;
        this.tags.forEach(function(elem){
            return console.log(this.fname+" "+elem+" "+this.lname);
        }.bind(this)
        );
    },
};
function getName(){
    return console.log(this);
}
console.log(getName.bind({value:20})())