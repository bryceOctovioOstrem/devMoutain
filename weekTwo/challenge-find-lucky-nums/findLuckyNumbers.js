// create lucky numbers funbction
// input array length as arrlen
// create empty array
// for arrlen push random number % 10
// nested loop through array agin
// if repeat numbers swap with random number
//return the new array
// Write your code below this line.
function luckyNumbers(arrlen){
    let array = [];
    for(let i =0; i <arrlen; i++){
        array.push(parseInt(Math.random()*10));
        for (let a = 0; a < array.length; a++ ){
            if(array[a] === array[i] && a != i || i < 1){
               array[i] = (parseInt(Math.random()*10));
               a = 0;
            }
        }

    }
    return array;
}

console.log(luckyNumbers(6));