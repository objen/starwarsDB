import { useEffect, useState } from "react"
import PlanetCard from "./PlanetCard"

function Planets() {
    const [planets, setPlanets] = useState([])
    const [nextAPI, setNext] = useState('')
    const [prevAPI, setPrev] = useState('')
    const [pageNow, setPage] = useState('https://swapi.dev/api/planets')
    
    function forward() {
        setPage(nextAPI)
    }

    function backward() {
        setPage(prevAPI)
    }
    
    useEffect(getPlanets, [])
    useEffect(getPlanets, [pageNow])

    function getPlanets() {
        fetch(pageNow)
            .then(function (response) {
                return response.json()          
            })
            .then (function (data) {
                console.log(data)
                setPlanets(data.results)
                setNext(data.next)
                setPrev(data.previous) 
            })
    }

    return (
        <>
        <h1>Planets</h1>

        <p>Find your way round the galaxy with this planet guide.</p>

        {prevAPI != null && <button onClick={backward}>Previous Page</button>}
        
        {nextAPI != null && <button onClick={forward}>Next Page</button>}

        {planets.map(function(planet) {
            return <PlanetCard key={planet.name} name={planet.name} />
        })}
       
        </>
    )
}

export default Planets

