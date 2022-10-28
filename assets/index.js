var button = document.getElementById('button');
var randomMovie = document.querySelector('.randomMovie')

function randomTitle (){
    var url = 'http://www.omdbapi.com/?i=tt3896198&apikey=b1e4d10d'
    fetch (url)
    .then(function (response) {
        if (response.ok){
            return response.json()
        }
        return null
    })
   .then(function(data){
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
   })
}


button.addEventListener('click', randomTitle);