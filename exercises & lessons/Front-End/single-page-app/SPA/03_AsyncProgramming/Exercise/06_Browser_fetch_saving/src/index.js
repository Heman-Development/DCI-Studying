// The following line makes sure your styles are included in the project. Don't remove this.
import "./styles/main.scss";
//import "babel-polyfill";
// Import any additional modules you want to include below \/

import Client from "./apiCall.js";
import View from "./view.js";

/* 
    - SS:    SesionStorage
    - titles:   Array of titles in SS
    - movies:   Array of movies object in SS
*/



//---------------------------
//get movie data from api
async function movieSearch(movieName) {
    console.log('movieSearch');
  let client = new Client();
  let movieData = await client.getMovieData(movieName);
  return movieData;
}




//--------------------------
//add movie titles to sessionStorage and check if they already exist
function addMovieTitle(givenTitle) {
    console.log('addMovieTitle');
  //read value of titles from SS
  let titles = JSON.parse(sessionStorage.getItem("titles")) || [];  //titles=['spiderman']

  //looking for given title inside array of titles in SS.
  if (titles.includes(givenTitle)) {
    alert(`${givenTitle} already added.`);
    
  } else {
    //push title to titles array
    titles.push(givenTitle);    //titles=[givenTitle]
  }

  //update the titles item in SS
  sessionStorage.setItem("titles", JSON.stringify(titles));     //titles="["spiderman", "rocky"]"
}



//----------------------------------
//add results of fetch to SS
function addMovie(movie) {
  console.log('addMovie');
  console.log(movie);
  //read value of movies from SS
  let movies = JSON.parse(sessionStorage.getItem("movies")) || [];
    console.log('ismoviethere:',isMoviesContainsGivenMovie(movies, movie));
    //check if movie exist in movies list in SS
    !isMoviesContainsGivenMovie(movies, movie)     //if movie exist in movies list return true
        ?
        //add movie to movies array
        movies.push(movie)
        : null;

  //update the movies item in SS
  sessionStorage.setItem("movies", JSON.stringify(movies));
}



//------------------------------
//looking for movie in movies list
function isMoviesContainsGivenMovie(movies, movie) {
    console.log('isMoviesContainsGivenMovie');
    let returnValue = false;

    for (let mov of movies) {
        mov.Title == movie.Title || movie.Error
            ? returnValue = true
            : null
    }

    //if movie exist in SS movies then we return true otherwise we return false
    return returnValue;
}



//------------------------------------
//add listener for save button
let save = document.querySelector('.btn-save');
save.addEventListener('click', function (e) {
    console.log("save btn clicked");
    //read value of text field
    let inputTitle = document.querySelector("#input").value;

    //add movie title to SS
    addMovieTitle(inputTitle);

    //add movie object to SS
    movieSearch(inputTitle).then(function (movie) {
        addMovie(movie);
    
    
        //read list of movies from SS and display them onload of the page
        let moviesList = JSON.parse(sessionStorage.getItem("movies"));
        //display movies
        displayMovies(moviesList);
    });
});




//-----------------------------
//add listener for reset button
let reset = document.querySelector('.btn-reset');
reset.addEventListener('click', (e) => {
    console.log('reset btn clicked');
    sessionStorage.clear();
    window.location.reload();   //to refresh the window
});



//--------------------------
//display movies
function displayMovies(movies) {
    console.log('displayMovies');
    console.log(movies);
    new View().removeDisplay(); //to clean the previous content

    movies.forEach(elem => {
       new View().displayMovieOnPage(elem);
        console.log('display movie');
    });
}


