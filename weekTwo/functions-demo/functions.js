let kenobiHealth = 100;

//let stringHealth = String(kenobiHealth);
//let boolHealth = Boolean(kenobiHealth);
//console.log(kenobiHealth);

let theWinnerIs =  'kenobi is the winner';
let newWinner = theWinnerIs.replace('Kenobi', 'Anakin');

//newWinner = newWinner.toLocaleUpperCase();
let newWinnerSplit = newWinner.split('k');
let newWinnerkebab = newWinnerSplit.join("~");

console.log(theWinnerIsSplit);

function isKenobiAlive (){
    if( kenobiHealth >0){
        console.log('kenobi is alive');
    } else{
        console.log('RIP Kenobi ');
    }
}
isKenobiAlive();

function surpriseAttack(attack){
    kenobiHealth -= attack;
}
let kenobiDefense = 15;
function readyAttack (attack){
    kenobiHealth -= (attack - kenobiDefense)
}

surpriseAttack(20);
readyAttack(30);
isKenobiAlive();
//console.log(kenobiHealth); 
/*function greeting (name1, name2){
    console.log(`hello ${name1}`);
    console.log(`good day to you ${name2}`);
}*/
greeting('alec','Jeddy');
/*const greeting = function(person1, person2){
    return `${person1}`
}*/
