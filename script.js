// lege ul pakken
const emptyList = document.getElementById('movieslijst');

//IMDB url
const imdb = (id) => {
    return "https://www.imdb.com/title/" + id
}
// add movies to dom functie
const addMoviesTodDom = (movies) => {
    const movieListItem = movies.map((movie) => {
        const link = document.createElement('a');
        const itemList = document.createElement('li');
        const movieImg = document.createElement('img');
        movieImg.src = movie.Poster;
        link.href = imdb(movie.imdbID);
        link.appendChild(movieImg);
        itemList.appendChild(link);
        return itemList;
    });
    movieListItem.forEach(item =>
        emptyList.appendChild(item)
    )
}
addMoviesTodDom(movies)

// verwijder functie
const removeMovies = () => {
    emptyList.innerHTML = "";
}

// de filters
// latest movie 
const filterLatest = () => {
    return movies.filter((item) => {
        return item.Year >= 2014
    })
}

// soort films op woord in titel
const filterTitle = (wordInMovie) => {
    return movies.filter((item) => {
        return item.Title.includes(wordInMovie);
    })
}

// radiobuttons pakken
const radioButtons = document.getElementsByName('filters')

// event functie aan radiobuttons
radioButtons.forEach((button) => {
    button.addEventListener('change', () => changeEvent(event));
})

// changeEvent functie 
const changeEvent = (event) => {
    switch (event.target.value) {
        case "nieuwste-films": 
        removeMovies();
        addMoviesTodDom(filterLatest());
        break;
        case "Avengers":
        removeMovies();
        addMoviesTodDom(filterTitle('Avengers'));
        break;
        case "X-Men":
        removeMovies();
        addMoviesTodDom(filterTitle('X-Men'));
        break;
        case "Princess":
        removeMovies();
        addMoviesTodDom(filterTitle('Princess'));
        break;
        case "Batman":
        removeMovies();
        addMoviesTodDom(filterTitle('Batman'));
        break;
    }
}
