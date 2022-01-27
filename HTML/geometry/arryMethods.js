// const arr = [1,5,8,7,6,7,8,9,6,6];

// const result = arr.filter((Maaz)=> Maaz % 2===0)
// console.log(result);     
// const result = arr.filter((Maaz)=> Maaz % 2 !==0);
// console.log(result);



// const arr = [5,10,15,20,25,30,35,40,45,50];
// // const mapped = arr.map((Maaz)=> Maaz * 6);
// // console.log(mapped);
// const mapped = arr.map((maaz)=> maaz-5)
// console.log(mapped)




// const arr=[1,5,8,7,6,7,8,9,6,6];

// const reduced=arr.reduce((acc,cur)=>{return acc +cur;},20);
// console.log(reduced);



// const products=[
//     {title: "Maaz", size: 7, color: "black"},
//     {title: "Baigan", size: 8, color: "white"},
//     {title: "Mirchi", size: 9, color: "black"},
//     {title: "Shampoo", size: 8, color: "red"},
//     {title: "Babu", size: 9, color: "blue"},
//     {title: "Shona", size: 7, color: "black"},
//     {title: "Mona", size: 10, color: "white"},
//     {title: "Kalu", size: 9, color: "pink"},
//     {title: "kutta", size: 6, color: "black"},
// ];
// const filtered=products.filter((item)=> item.color === "black");
// console.log(filtered);
// const filtered=products.filter((item)=> item.size >8 );
// console.log(filtered);
// const filtered=products.filter((item)=> item.size <8 && item.color === "black");
// console.log(filtered);
// const filtered=products.filter((item)=> item.size <8 || item.color === "black");
// console.log(filtered);

// const sorted=products.sort((a,b)=> a.title.toLowerCase()> b.title.toLowerCase() ? 1 : -1)
// console.log(sorted);
// const sorted=products.sort((a,b)=> a.title.toUpperCase()> b.title.toUpperCase() ? -1 : 1);
// console.log(sorted);

// const filtered=products.filter((item)=> item.color==="black")
// console.log(filtered)

// const filtered=products.filter((item)=> item.size >7 || item.color ==="black")
// console.log(filtered)

// const getsum = (...c)=>{ 
//     const r=c.map((item)=>item+"a")
//     return r;
// }
// console.log(getsum("A","B","C"))

const arr=[12,13,1,5,70,-1];
const result= arr.every((Maaz)=> Maaz>=70)
console.log(result);

