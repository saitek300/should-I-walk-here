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

    title.textContent = data.Title
    rating.textContent = data.imdbRating
    rated.textContent = data.Rated
    console.log(data)
    image.setAttribute('src', data.Poster)

    for(var i = 0; i < data.rating; i++){
        var rating = document.createElement('p')
        page.textContent = data.rating[i].rating.name+ ":" + data.rating[i].base_rating
        rating.appendChild(rating)
    }
    page.appendChild(title)
    page.appendChild(rated)
    page.appendChild(image)
    page.appendChild(rating)
    randomMovie.appendChild(page)
   })
}


button.addEventListener('click', randomTitle);

