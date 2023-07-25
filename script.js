//first creatre and array for movies
const movies=[]
console.log(movies)
let renderContainer=document.querySelector(".renderContainer")
const button= document.querySelector("button")
const form = document.getElementById("addMovieForm")

const addMovies=function(e){
    e.preventDefault()
    const genreSelect=document.querySelector("#genreSelect").value
    const movieName= document.querySelector("#movieTitle").value
    if(!movieName && genreSelect==="all" ){
        console.log("falsy")
        movieName.value=""
        renderMovies()
    }else if(movieName!=="" && genreSelect==="all"){
        renderMovies() 
        console.log("this one")

    }else if(movieName !==""&&genreSelect!=="all"){
        console.log("not empty")
        movies.push({genre:genreSelect,movieTitle:movieName})
    }
   renderMovies(genreSelect)
   form.reset()

}

const renderMovies=function(genre){
renderContainer.innerHTML=""

 

movies.forEach(movieElement => {
    let divTag = document.createElement("div")
    divTag.classList.add("movies")
        divTag.innerHTML= `<h1>${movieElement.movieTitle}</h1><p>${movieElement.genre}</p>`
        renderContainer.appendChild(divTag);
});

if(genre!=="all"){
    filterMovies()

}
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

renderContainer.addEventListener("click",(e)=>{
    if(e.target.classList.contains("movies")){
        deleteMovie(e)
    }
})

const deleteMovie=function(e){
let seletedMovie=e.target
let movieContainer=renderContainer.children
let index= Array.from(movieContainer).indexOf(seletedMovie)
movies.splice(index,1)
seletedMovie.remove()
}

button.addEventListener("click",addMovies)