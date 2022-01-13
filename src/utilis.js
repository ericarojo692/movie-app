getMoviesBySearchTerm = async(searchTerm) => {
    const url = (`https://www.omdbapi.com/=${searchTerm}`)
    let result = await fetch(url)
    console.log(result.json())
}

console.log(getMoviesBySearchTerm('Serenity'))


getMovieDetailById = async(movieId) => {
    const url = (`https://www.omdbapi.com/=${movieId}`)
    let result = await fetch(url)
    console.log(result.json())
}
console.log(getMoviesBySearchTerm('1'))