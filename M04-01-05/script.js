// // opdracht A 
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

const findSpiderMan = function (superheroes) {
    return superheroes.find(function (superhero) {
        return superhero.name === "Spiderman"
    });
};

console.log(findSpiderMan(superheroes));

// opdracht B
const arrayOne = [1, 2, 3];
arrayOne.forEach(element => console.log(element * 2))

// opdracht C
const array = [1, 4, 3, 6, 9, 7, 11];

const biggerThan10 = (element) => element >= 10;

console.log(array.some(biggerThan10));

const array2 = [1, 2, 1, 2, 1, 2];
const biggerThanTen = (element) => element >= 10;
console.log(array2.some(biggerThanTen));

// Opdracht D
const isItalyInTheGreat7 = ['Canada', 'France', 'Italy', 'Japan', 'United Kingdom', 'United States'];
console.log(isItalyInTheGreat7.includes("Italy"));

//Opdracht E
const arrayKeerTien = [1, 4, 3, 6, 9, 7, 11];
    arrayKeerTien.forEach(element => console.log(element * 10));
//optie met nieuwe array

const keerTien = function (array){
    let newArray = [];
    array.forEach(number => {
        newArray.push(number * 10) 
    });
    return newArray
}
console.log("keer tien:", keerTien([1, 4, 3, 6, 9, 7, 11]));

// opdracht F
const onderde100 = (currentvalue) => currentvalue < 100;
const array100 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]
console.log(array100.every(onderde100));

// Opdracht G
const arrayG = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const reducer = (accumulator, currentvalue) => accumulator + currentvalue;
console.log(arrayG.reduce(reducer));
