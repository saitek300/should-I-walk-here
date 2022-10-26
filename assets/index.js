var button = document.getElementById('button');

function randomTitle (){
    var url = 'http://www.omdbapi.com/?i=tt3896198&apikey=b1e4d10d'
    fetch (url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data)
    })
}


button.addEventListener('click', randomTitle);

