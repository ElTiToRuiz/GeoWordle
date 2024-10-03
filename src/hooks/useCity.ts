import { useEffect, useState } from "react"
const URL = 'http://localhost:3000'

export const useCity = () => {
    const [city, setCity] = useState('')

    useEffect(() => {
        const fetchValidCity = async () => {
            const fetchedCity = await fetchCity()
            setCity(fetchedCity)
        }
        fetchValidCity()
    }, [])

    return { city, setCity }
}


export const fetchCity = async () => {
    let fetchedCity = ''
    do {
        const response = await fetch(URL)
        const data = await response.json()
        fetchedCity = data.city.toUpperCase()
    } while (!(fetchedCity.length > 5 && fetchedCity.length < 7 && !fetchedCity.includes(' ')))
            
    return fetchedCity
}