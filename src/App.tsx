import { useCity } from "./hooks/useCity"
import { UserAttemptsProvider } from './context/UserAttempts'
import { GameStatusProvider } from './context/GameStatus'
import { Game } from './components/Game'

export const App = () => {
    const { city } = useCity()
    console.log(city)
    return (
        <UserAttemptsProvider>
            <GameStatusProvider>
                <Game city={city}/>
            </GameStatusProvider>
        </UserAttemptsProvider>
    )
}