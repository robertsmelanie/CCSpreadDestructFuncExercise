// Spread Destructuring Functions Exercising
// 1a
const jPDinos = [
    'Velociraptors', 
    'Tyrannosaurus Rex', 
    'Dilophosurus'
];

// 1b
/*
function seeDinos(a, ...b) {
    console.log(a);
    console.log(b);
   
}
seeDinos('Velociraptors', 'Tyrannosaurus Rex', 'Dilophosurus')
*/
//the correct way is 
function seeDinos(a, ...b) {
    console.log(a);
    console.log(b);
   
}
seeDinos(...jPDinos)


// 2a
const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
};

//2b
/*seeCharacters = (jPCharacters) => {
    console.log(jPCharacters.ellieSattler);
}
  */
 
// or
/*
seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);
}
*/
// or
seeCharacters = ({ellieSattler}) => console.log(ellieSattler)

seeCharacters(jPCharacters)

// Bonus
//3a
const jurassicParkMovies = [
    {
        One: 'Jurassic Park',
        two: "The Lost World: Jurassic Park", 
        three: "Jurassic Park III"
        
    },
    {
        four: "Jurassic World",
        five: "Jurassic World: Fallen Kingdom", 
        six: "Jurassic World: Dominion"
    }
    
];
console.log(jurassicParkMovies);
//3b

const seeJPMovies = function ([{one, two, three}, {four, five, six}]) {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
    
}

/*or
const seeJPMovies = function ([{one, two, three}, {four, five, six}]) => {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
    
}
*/
