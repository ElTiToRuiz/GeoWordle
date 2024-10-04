type HOST = {
    domain: string    
} 

export const BACKEND_HOST : HOST = {
    domain: 'http://localhost:3000'
}  

export const fetchCity = async ({BACKEND_HOST}:{BACKEND_HOST: HOST}) => {
    let fetchedCity = ''
    do {
        const response = await fetch(BACKEND_HOST.domain)
        const data = await response.json()
        fetchedCity = data.city.toUpperCase()
    } while (!(fetchedCity.length > 5 && fetchedCity.length < 7 && !fetchedCity.includes(' ')))
            
    return fetchedCity
}

