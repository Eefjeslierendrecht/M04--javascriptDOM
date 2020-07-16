const superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]

// opdracht 1 array met namen van de superheroes
const namesSuperHeroes = superheroes.map(superheroes => {
    return superheroes.name;
})
console.log(namesSuperHeroes)

// opdracht 2 array met lichte superhelden
const lichteSuperhelden = superheroes.filter(superheroes => {
    return superheroes.weight <= 190;
})
console.log(lichteSuperhelden)

// opdracht 3 array met namen van superhelden die 200 pounds wegen
const super200 = superheroes.filter(superheroes => {
    return superheroes.weight == 200;
})
console.log(super200);

const super200Names = super200.map(super200 => {
    return super200.name
})
console.log(super200Names)

// opdracht 4 array met waar de superhelden hun first appearance hebben gehad
const firstAppearance = superheroes.map(superheroes => {
    return superheroes.first_appearance
})
console.log(firstAppearance)

// opdracht 5 array met marval comics
const marvels = superheroes.filter(superheroes => {
    return superheroes.publisher == 'Marvel Comics'
})
console.log(marvels)

// opdracht 6 totaal gewicht  DC comics
const dcSuperhelden = superheroes.filter(superheroes => {
    return superheroes.publisher == "DC Comics"
})
console.log(dcSuperhelden)

const weightDC = dcSuperhelden.map(dcSuperhelden => {
    return dcSuperhelden.weight
})
console.log(weightDC)

const totaalDC = (accumulator, currentValue) => accumulator + currentValue;
console.log(weightDC.reduce(totaalDC))

// opdracht 7 totaal gewicht Marvel Comics
const marvelHeroes = superheroes.filter(superheroes => {
    return superheroes.publisher == "Marvel Comics"
})
console.log(marvelHeroes)

const weightMarvels = marvelHeroes.map(marvelHeroes => {
    return marvelHeroes.weight
})
console.log(weightMarvels)

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(weightMarvels.reduce(reducer));

//opdracht 8 zoek de zwaarste superheld



// parseInt oefening
const a = "10"
const b = parseInt(a)
console.log("Number value is" + b)

const c = ["20", "10", "30"]
const d 