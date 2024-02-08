import { useEffect, useState } from "react"


function FilmTitle({url}) {
    const [filmName, setFilmName] = useState('')
   
    useEffect(getFilmName, [])

    function getFilmName() {
        fetch(url)
        .then(function (response) {
            return response.json()          
        })
        .then (function (data) {
            setFilmName(data.title)
        })      
    }

    return (
        <>
        <li>{filmName}</li>
        </>
    )
}
export default FilmTitle
