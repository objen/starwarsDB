import { useEffect, useState } from "react"
import FilmList from "./FilmList"

function Bios({name, birth, homeplanet, films}) {
    const [planetName, setPlanetName] = useState('')
   
    useEffect(getHomeplanet, [])

    function getHomeplanet() {
        fetch(homeplanet)
        .then(res => res.json())
        .then (data => {
            setPlanetName(data.name)
        })      
    }

    return (
        <ul>
            <li>{name}</li>
            <li>{birth}</li>
            <li>{planetName}</li>
            <li>Films:</li>
                <ul><FilmList movies={films} /></ul>
        </ul>  
    )
}
export default Bios
