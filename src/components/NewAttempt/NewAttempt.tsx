/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useNewAttempt } from '../../hooks/useNewAttempt'
import './../style/attemp.css'

export const NewAttempt = ({ city }: { city: string }) => {
    
    const { userWord, keydown, printLetters } = useNewAttempt({city})

    useEffect(()=>{
        keydown()
    }, [])

    useEffect(()=> {
        printLetters()
    }, [userWord])


    return (
        <div className='attempt-row' id='userAttemptLine'>   
            {
                Array.from({length: city.length}).map((_, charIndex) => (
                    <div key={charIndex} className='attempt-char'>
                        <span className='char-placeholder'></span>
                    </div>
                ))
            }
        </div>
    )
}
