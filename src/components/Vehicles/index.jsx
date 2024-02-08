import { useEffect, useState } from "react"
import VehicleCard from "./VehicleCard"

function Vehicles() {
    const [vehicles, setVehicles] = useState([])
    const [nextAPI, setNext] = useState('')
    const [prevAPI, setPrev] = useState('')
    const [pageNow, setPage] = useState('https://swapi.dev/api/vehicles')
    
    function forward() {
        setPage(nextAPI)
    }

    function backward() {
        setPage(prevAPI)
    }

    useEffect(getVehicles, [])
    useEffect(getVehicles, [pageNow])

    function getVehicles() {
        fetch(pageNow)
        .then(function (response) {
            return response.json()
        })
        .then (function (data) {
            console.log(data)
            setVehicles(data.results)
            setNext(data.next)
            setPrev(data.previous) 
        })
    }

    return (
        <>
        <h1>Vehicles</h1>

        <p>Landspeeders at the ready with these cool transports.</p>

        {prevAPI != null && <button onClick={backward}>Previous Page</button>}
        
        {nextAPI != null && <button onClick={forward}>Next Page</button>}

        {vehicles.map(function(vehicle) {
            return <VehicleCard key={vehicle.name}
            name={vehicle.name} />
        })}
        </>
    )
}

export default Vehicles