//first creatre and array for movies
const movies=[]

let renderContainer=document.querySelector(".renderContainer")
const button= document.querySelector("button")
const form = document.getElementById("addMovieForm")
const addMovies=function(e){
    e.preventDefault()
    const genreSelect=document.querySelector("#genreSelect").value
    const movieName= document.querySelector("#movieTitle").value
    if(!movieName){
        movieName.value=""
    }else if(movieName !==""){
        
        movies.push({genre:genreSelect,movieTitle:movieName})
    }
    renderMovies()
   form.reset()

}

const renderMovies=function(){
renderContainer.innerHTML=""
movies.forEach(movieElement => {
    let divTag = document.createElement("div")
        divTag.innerHTML= `<h1>${movieElement.movieTitle}</h1><p>${movieElement.genre}</p>`
        console.log(divTag)
        renderContainer.appendChild(divTag);
});
filterMovies()
}


const filterMovies=function(){
    const genreSelect=document.querySelector("#genreSelect").value
    const movieName= document.querySelector("#movieTitle").value
    if(!movieName){
        let filteredArr=movies.filter(movies=>movies.genre===genreSelect)
        renderFilterList(filteredArr)
    }
   
}

const renderFilterList= function(filteredList){
renderContainer.innerHTML=""
filteredList.forEach(listItem => {
    let divTag = document.createElement("div")
    divTag.innerHTML= `<h1>${listItem.movieTitle}</h1><p>${listItem.genre}</p>`
    renderContainer.appendChild(divTag);
});
}
button.addEventListener("click",addMovies)