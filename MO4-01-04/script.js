// opdracht A

const addTheWordCool = function (array) {
    array.push("cool");
    return array;
};

console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

//opdracht B

const amountOfElementsInArray = function (array) {
    return array.length
}
console.log(amountOfElementsInArray(["appels", "peren", "citroenen"]));

// opdracht C

const selectBelgiumFromBenelux = function (array) {
    return array.shift()
}
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));

//Opdracht D
const lastElementInArray = function (array) {
    return array.pop()
}
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));

// Opdracht E
const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = function (array) {
    const newArray = array.slice(1, 4);
    console.log("new array:", newArray, "oude array:", array)
    return newArray;
};

const impeachTrumpSplice = function (array) {
    const removeTrump = array.splice(0, 1);
    console.log("the mutated array:", array)
    return array

}

console.log(impeachTrumpSlice(presidents));
console.log(impeachTrumpSplice(presidents));

// opdracht F
const elements = ["winc", "academy", "is", "Leuk"];
console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join(" "));

// opdracht G
const arrayA = [1, 2, 3]
const arrayB = [4, 5, 6]
const arrayC = arrayA.concat(arrayB);

console.log(arrayC);