/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react'
import { Attempt } from './Attempt/Attempt'
import { NewAttempt } from './NewAttempt/NewAttempt'
import { GameStatusContext } from '../context/GameStatus'
import { UserAttemptsContext } from '../context/UserAttempts'
import './style/game.css'
import { useGameLogic } from '../hooks/gameFeatures'

export const Game = ({city}:{city:string}) => {
    const MAX_ATTEMPTS = 6
    const {win, end, gameStarted} = useContext(GameStatusContext)
    const {userInputs, charStatus} = useContext(UserAttemptsContext) 
    const {startGame, restart, saveLocalUserInputs, saveLocalCharStatus} = useGameLogic()
    
    useEffect(()=>{
        saveLocalUserInputs()
    }, [userInputs])

    useEffect(()=>{
        saveLocalCharStatus()
    }, [charStatus])
        
    return(
        <div className='main'>
            <div className='main-start'>
                <h1>Geo Wordle</h1>
                <p>Guess the city:</p>
                {!gameStarted && <button onClick={startGame}>Start</button>}
            </div>
            {gameStarted && (
                <div className='attempts-container'>
                    {userInputs && userInputs.map((input, index) => (
                        <Attempt key={index} userWord={input} charStatus={charStatus[index]} />
                    ))}
                    {userInputs && userInputs.length < MAX_ATTEMPTS ? (
                        <>
                            <NewAttempt key={userInputs.length} city={city}/>
                            {Array.from({ length: MAX_ATTEMPTS - userInputs.length - 1 }).map((_, index) => (
                                <Attempt key={userInputs.length + index + 1} userWord={city} charStatus={[]} />
                            ))}
                        </>
                    ) : null}
                </div>
            )}
            {end && (
                <dialog className='endgame-popup' open>
                    <h1 className='endgame-popup-title'>
                        {win ? 'Congratulations!' : 'Game over!'}
                    </h1>
                    <p className='endgame-popup-description'>
                        {win ? 'You guessed the correct city.' : 
                        `You ran out of attempts. The correct city was ${city}`}
                    </p>
                    <button onClick={restart}>Restart</button>
                </dialog>
            )}
        </div>
    )
}