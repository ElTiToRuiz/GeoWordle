import { useCity } from "./hooks/useCity"
import { UserAttemptsProvider } from './context/UserAttempts'
import { GameStatusProvider } from './context/GameStatus'
import { Game } from './components/Game'
import { useGameLogic } from "./hooks/gameFeatures"
import { useEffect } from "react"

export const App = () => {
    const { city } = useCity()
    const { saveLocalCity } = useGameLogic()

    useEffect(()=>{
        saveLocalCity({city})
    }, [city, saveLocalCity])

    return (
        <UserAttemptsProvider>
            <GameStatusProvider>
                <Game city={city}/>
            </GameStatusProvider>
        </UserAttemptsProvider>
    )
}