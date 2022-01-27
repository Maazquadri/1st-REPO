const letters=["a","b","c","d","e","f"];
const result = moveElement(letters, 3, 2);
console.log(result);

function moveElement(Array, index, offset){
    const newindex=index + offset;
    if(newindex >= Array.lenght || newindex<0){
        console.log("please provide a valid offset value");
        return;
    }
    const update=[...Array];
    const removedElem=update.splice(index,1)[0];
    update.splice(newindex, 0, removedElem);
return update;
}
