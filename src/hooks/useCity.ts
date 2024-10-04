import { useEffect, useState } from "react"
import { fetchCity, BACKEND_HOST } from "../service/fetchCity"
import { loadCity } from "../service/localStorage"

export const useCity = () => {
    const [city, setCity] = useState('')

    useEffect(() => {
        const storedCity = loadCity()
        if (storedCity) {
            setCity(storedCity)
            return
        }
        const fetchValidCity = async () => {
            const fetchedCity = await fetchCity({ BACKEND_HOST })
            setCity(fetchedCity)
        }
        fetchValidCity()
    }, [])

    return { city, setCity }
}