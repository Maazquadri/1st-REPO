// for(let i=1; i<=100; i++){
//     if(i%15===0) console.log("FizzBuzz")
//     else if (i%3===0) console.log("Fizz");
//     else if(i%5===0) console.log("Buzz")
//         else console.log(i);
//     }
let str="";
for(let i=1; i<=100; i++){
    if(i%15===0) str=str+"FizzBuzz";
    else if (i%3===0) str=str+"Fizz";
    else if(i%5===0) str=str+"Buzz"
        else str=str+ " " +i;
    }
    console.log(str);
