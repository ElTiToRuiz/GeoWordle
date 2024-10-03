import { Attemp } from './components/Attemp'
import { NewAttemp } from './components/NewAttemp' 
import { useCity } from "./hooks/useCity"
import { checkLineCharacters } from './utils/checkLine'
import './app.css'
import { useEffect, useState } from 'react'

export const App = () => {
    const { city } = useCity()
    const [win, setWin] = useState(false)
    const [end, setEnd] = useState(false)
    const [userInputs, setUserInputs] = useState<string[]>([])
    const [charStatus, setCharStatus] = useState<string[][]>([])
    const [gameStarted, setGameStarted] = useState(false)

    const MAX_ATTEMPTS = 6

    const startGame = () => {
        setGameStarted(true)
    }

    const resetGame = async() => {
        setUserInputs([])
        setCharStatus([])
        setWin(false)
        setEnd(false)
        setGameStarted(false)
        // const newCity = await fetchCity()
        // setCity(newCity)

    }

    const nextLine = (newAttempt: string) => {
        setUserInputs([...userInputs, newAttempt])
    }

    const checkLine = (userWord: string) => {
        if (userWord === city) {
            setWin(true)
        }
        const newCharStatus = checkLineCharacters({ userWord, city })
        setCharStatus([...charStatus, newCharStatus])

        if (userInputs.length + 1 >= city.length) {
            setEnd(true)
        }
    }

    useEffect(() => {
        if (win) {
            // alert('Congratulations! You guessed the correct city.')
            setEnd(true)
        }
    }, [win])

    useEffect(() => {
        if (end && !win) {
            // alert(`Game over! The correct city was: ${city}`)
        }
        // resetGame()
    }, [end])

    if (!city) {
        return <h1>Loading...</h1>
    }

    console.log(city)

    return (
        <div className='main'>
            <div className='main-start'>
                <h1>Geo Wordle</h1>
                <p>Guess the city:</p>
                {!gameStarted && <button onClick={startGame}>Start</button>}
            </div>
            {gameStarted && (
                <div className='attempts-container'>
                    {userInputs.map((input, index) => (
                        <Attemp key={index} userWord={input} display={true} charStatus={charStatus[index]} />
                    ))}
                    {userInputs.length < MAX_ATTEMPTS ? (
                        <>
                            <NewAttemp key={userInputs.length} word={city} nextLine={nextLine} checkLine={checkLine} />
                            {Array.from({ length: MAX_ATTEMPTS - userInputs.length - 1 }).map((_, index) => (
                                <Attemp key={userInputs.length + index + 1} userWord={city} display={false} charStatus={charStatus[index]} />
                            ))}
                        </>
                    ) : null}
                </div>
            )}
            {end && (
                <dialog className='lose-endgame'>
                    <h1>Game Over</h1>
                    <p>The correct city was: {city}</p>
                    <button onClick={resetGame}>Restart</button>
                </dialog>
            )}
        </div>
    )
}
