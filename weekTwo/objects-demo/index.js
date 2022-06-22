let person = {
    firstName: 'Bryce',
    lastnaem: " ostrem",
    age : 24,
    favorites: {
        movies: { 
            movie1: "lotr",
            movie2: "avengers"



        },
        artists: ["carly rae Jepsen", "Justin Bieber"],
    },
    greeting :  function(){
        console.log("hello, there");

    }
}

// pracecing acessing key value pairs
//console.log(person.favorites.movies);
//console.log(person["favorites"][artists]);
let {age} = person;
//console.log(age);
//console.log(person.age);
//let {firstName: nameFirst, lastname: nameLast} = person;
//console.log (firstName, lastname);
//for(let property in person){
//    console.log(`${property}: ${person[property]}`);
//}
// classes practice
class Animals {
    constructor(name, species, size){
        this.name = name;
        this.species = species;
        this.size = size;
        this.hairy = "maybe";
    }
    greeting(){
        console.log(`Hi, I am a ${this.species} and my name is ${this.name}`);

    }
}
let snake = new Animals("Snek", "Boa", "Big");
console.log(snake);
snake.greeting();
class Mammals extends Animals{
    constructor(name, species, size, isHairy){
        super(name, species, size);
        this.isHairy = isHairy;
        //let hippo = new Mammals();
        }
}
let hippo = new Mammals("Hip", "hippoptamus", "massive", false);
hippo.greeting();
