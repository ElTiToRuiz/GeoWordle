import { useEffect, useState } from "react"
const URL = 'http://localhost:3000'

export const useCity = ()=>{
    const [city, setCity] = useState('')

    const fetchCity = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setCity(data.city.toUpperCase())
    }

    useEffect(()=>{
        fetchCity()
    }, [])

    return {city}
}

