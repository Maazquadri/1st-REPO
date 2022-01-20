const phone="8806299311";

const max=phone.split("").reduce((acc,curr)=> (acc>curr ? acc:curr));

console.log(max);