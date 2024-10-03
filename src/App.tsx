import { Attemp } from './components/Attemp';
import { NewAttemp } from './components/NewAttemp'; 
import { useCity } from "./hooks/useCity";
import './app.css';
import { useState } from 'react';

const App = () => {
    const { city } = useCity();
    const [userInputs, setUserInputs] = useState<string[]>([]);
    const [charStatus, setCharStatus] = useState<string[][]>([])

    const nextLine = (newAttempt: string) => {
        setUserInputs([...userInputs, newAttempt]);
    };

    const checkLine = (userWord: string) => {
        if(userWord === city){
            alert('You got it right!')
        }
        
        const newCharStatus = userWord.split('').map((char, charIndex)=> {
            if(char === city[charIndex]){
                return 'correct'
            } else if(city.includes(char)) {
                return 'wrongplace'
            }
            return 'default'
        });
        
        setCharStatus([...charStatus, newCharStatus])
    }

    if (!city) {
        return <h1>Loading...</h1>;
    }

    console.log(city)
    
    return (
        <div className='main'>
            <div className='main-start'>
                <h1>Geo Wordle</h1>
                <p>Guess the city:</p>
                <button>Start</button>
            </div>
            <div className='attempts-container'>
                {
                    userInputs.map((input, index) => (
                        <Attemp key={index} userWord={input} display={true} charStatus={charStatus[index]}/>
                    ))
                }
                {
                    userInputs.length < city.length ? (
                        <>
                            <NewAttemp key={userInputs.length} word={city} nextLine={nextLine}  checkLine={checkLine}/>
                            {
                                Array.from({ length: city.length - userInputs.length - 1 }).map((_, index) => (
                                    <Attemp key={userInputs.length + index + 1} userWord={city} display={false} charStatus={charStatus[index]}/>
                                ))
                            }
                        </>
                    ) : null
                }
            </div>
        </div>
    );
};

    export default App;