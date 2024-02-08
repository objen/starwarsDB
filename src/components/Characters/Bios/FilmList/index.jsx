import FilmTitle from "./FilmTitle"

function FilmList({movies}) {
    
    return(
        <>
    {movies.map(movie => <FilmTitle key={movie} url={movie}/>)}
        </>
        )
}
export default FilmList

