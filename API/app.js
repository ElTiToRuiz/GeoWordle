import express from 'express'
import cors from 'cors'
import cities from "./data/cities.json" with {type: 'json'}

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    const city = chooseRandomCity()
    res.json({city}) 
})

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

const chooseRandomCity = ()=>{
    const listCities = cities.cities
    const randomIndex = Math.floor(Math.random() * listCities.length)
    return listCities[randomIndex]
}