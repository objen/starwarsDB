import { useEffect, useState } from "react"
import Bios from "./Bios"

function Characters() {
    const [characters, setCharacters] = useState([])
    const [nextAPI, setNext] = useState('')
    const [prevAPI, setPrev] = useState('')
    const [pageNow, setPage] = useState('https://swapi.dev/api/people')
    
    function forward() {
        setPage(nextAPI)
    }

    function backward() {
        setPage(prevAPI)
    }
    
    useEffect(getCharacterData, [])
    useEffect(getCharacterData, [pageNow])

    function getCharacterData() {
        fetch(pageNow)
            .then(function (response) {
                return response.json()          
            })
            .then (function (data) {
                console.log(data)
                setCharacters(data.results)
                setNext(data.next)
                setPrev(data.previous) 
            })
    }

    return (
        <>
        <h1>Characters</h1>

        <p>Get to know the characters that populate the Star Wars Universe</p>

        {prevAPI != null && <button onClick={backward}>Previous Page</button>}
        
        {nextAPI != null && <button onClick={forward}>Next Page</button>}

        {characters.map(function(character) {
            return <Bios key={character.name} name={character.name} birth={character.birth_year} homeplanet={character.homeworld} films={character.films}/>
        })}

        </>
    )
}

export default Characters