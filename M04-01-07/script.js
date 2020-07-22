// eventlistener aan alle big five buttons maken.
let allBigFiveButton = document.getElementsByClassName('big-five-button');
console.log(allBigFiveButton);

for (var i = 0; i < allBigFiveButton.length; i++) {
    allBigFiveButton[i].addEventListener('click', function () {
        console.log(event.target.textContent)
        const anmialSpotted = event.target.textContent
        const newListItem = document.createElement('li');
        newListItem.appendChild(document.createTextNode(anmialSpotted))
        const list = document.getElementById('spotted-animals-list');
        list.appendChild(newListItem);
    })

}
// duck/first item verwijderen
let removeButton = document.getElementById('remove-first-item-button');
console.log(removeButton)

removeButton.addEventListener('click', removeItem);

function removeItem() {
    const firstSpottedAnimal = document.getElementById('spotted-animals-list').firstChild
    firstSpottedAnimal.remove()
}

// alles verwijderen                                                                  
let removeAllButton = document.getElementById('remove-all-button');
console.log(removeAllButton)

removeAllButton.addEventListener("click", removeAll);

function removeAll() {
    const spottedAnimals = document.getElementById('spotted-animals-list');
    spottedAnimals.innerHTML = " ";
}
