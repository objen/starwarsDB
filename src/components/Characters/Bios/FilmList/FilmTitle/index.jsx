import { useEffect, useState } from "react"


function FilmTitle({url}) {
    const [filmName, setFilmName] = useState('')
   
    useEffect(getFilmName, [])

    function getFilmName() {
        fetch(url)
        .then(res => res.json())          
        .then (data => {
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
