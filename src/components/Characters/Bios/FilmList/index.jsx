import FilmTitle from "./FilmTitle"

function FilmList({movies}) {
    
    return(
        <>
    {movies.map(function (movie) {
        return( 
            <><FilmTitle key={movie} url={movie}/></>
        )
    })}
</>)
}
export default FilmList

