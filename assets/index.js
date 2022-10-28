var button = document.getElementById('button');
var randomMovie = document.querySelector('.randomMovie')
let randomMovieId = []
const arrayLength = 7

function randomMovieId1(){
    randomMovieId = []
    for(let i = 0; i < arrayLength; i++){
    randomMovieId.push(Math.floor((Math.random()*11)))
}
randomMovieId = randomMovieId.join("")
}


function randomTitle (){
    randomMovieId1();
    var url = 'http://www.omdbapi.com/?i=tt'+randomMovieId+'&apikey=b1e4d10d'
    console.log(url)
    fetch (url)
    .then(function (response) {
        if (response.ok){
            return response.json()
        }
        else {
            console.log('trying again')
            randomMovieId1()
            randomTitle()
        }
    })
   .then(function(data){
    if (data.Response == 'False'){
        console.log('trying again')
            randomMovieId1()
            randomTitle()
    }
   else {
    console.log(data)
    var page = document.createElement('div')
    var title = document.createElement('h1')
    var image = document.createElement('img')
    var rating = document.createElement('p')
    var rated = document.createElement('p')
    var plot = document.createElement('p')
    var actors = document.createElement('p')
    var genre = document.createElement('p')

    title.textContent = data.Title
    rating.textContent = data.imdbRating
    rated.textContent = data.Rated
    image.setAttribute('src', data.Poster)
    plot.textContent = data.Plot
    actors.textContent = data.Actors
    genre.textContent = data.Genre

   
    page.appendChild(title)
    page.appendChild(rated)
    page.appendChild(image)
    page.appendChild(rating)
    page.appendChild(plot)
    page.appendChild(actors)
    page.appendChild(genre)
    randomMovie.appendChild(page)
   }
   })
}


button.addEventListener('click', randomTitle);