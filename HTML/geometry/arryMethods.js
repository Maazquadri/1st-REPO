// const arr = [1,5,8,7,6,7,8,9,6,6];

// const result = arr.filter((Maaz)=> Maaz % 2===0)
// console.log(result);
// const result = arr.filter((Maaz)=> Maaz % 2 !==0);
// console.log(result);

// const mapped = arr.map((Maaz)=> Maaz * 6);
// console.log,(mapped);
// const arr=[1,5,8,7,6,7,8,9,6,6];

// const reduced=arr.reduce((acc,cur)=>{return acc +cur;},20);
// console.log(reduced);



const products=[
    {title: "Aaaz", size: 7, color: "black"},
    {title: "faigan", size: 8, color: "white"},
    {title: "Birchi", size: 9, color: "black"},
    {title: "ghampoo", size: 8, color: "red"},
    {title: "Cabu", size: 9, color: "blue"},
    {title: "hona", size: 7, color: "black"},
    {title: "Dona", size: 10, color: "white"},
    {title: "ialu", size: 9, color: "pink"},
    {title: "kutta", size: 6, color: "black"},
];
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
const sorted=products.sort((a,b)=> a.title.toUpperCase()> b.title.toUpperCase() ? -1 : 1);
console.log(sorted);


