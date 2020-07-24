// lege ul pakken
const emptyList = document.getElementById('movieslijst');

//IMDB url
const imdb = (id) => {
    return "https://www.imdb.com/title/" + id
}

// voeg de films toe aan de DOM
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


//verwijder movies uit de dom
const removeMovies = () => {
    emptyList.innerHTML = "";
}


//  pak de radiobuttons
const button = document.querySelectorAll('button');



//filter op word in titel
const filterName = (movieTitle) => {
    return movies.Movies.filter((item) => {
        return item.Title.includes(movieTitle);
    })
}

// filter op jaar
const newMovie = () => {
    return movies.Movies.filter((item) => {
        return item.Year >= 2014;
    })
}


//event code  changeEvent
const changeEvent = (event) => {
    switch (event.target.value) {
        case filter1:
            removeMovies();
            addMoviesTodDom(newMovie());
            break;
        case filter5:
            removeMovies();
            addMoviesTodDom(filterName("Batman"));
            break;
        case filter3:
            removeMovies();
            addMoviesTodDom(filterName("X-Men"));
            break;
        case filter2:
            removeMovies();
            addMoviesTodDom(filterName("Avenger"));
            break;
        case filter4:
            removeMovies();
            addMoviesToDom(filterName("Princess"));
            break;
        default:
            addMoviesTodDom(movies);
            break;
    }
};

button.forEach((item) => {
    button.addEventListener('change', () => changeEvent(event));

})

addMoviesTodDom(movies);