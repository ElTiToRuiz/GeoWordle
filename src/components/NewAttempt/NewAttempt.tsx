import { useEffect, useState } from 'react'
import './../style/attemp.css'
import { useGameLogic } from '../../hooks/gameFeatures'

export const NewAttempt = ({ city }: { city: string }) => {
    const { nextLine, checkLine } = useGameLogic();
    const [userWord, setuserWord] = useState('')

    const handleClick = (event: KeyboardEvent) => {
        const key = event.key
        setuserWord(userWord => {
            if (key === 'Backspace') {
                return userWord.slice(0, -1)
            } else if(key === 'Enter' && userWord.length == city.length){ 
                nextLine(userWord)
                checkLine({userWord, city})
                return ''
            } else if (/^[a-zA-Z]$/.test(key) && userWord.length < city.length) {
                return userWord + key.toLocaleUpperCase()
            }
            return userWord
        })
    }

    useEffect(() => {
        window.addEventListener('keydown', handleClick)
        return () => {
            window.removeEventListener('keydown', handleClick)
        }
    }, [])

    useEffect(() => {
        const attemptRow = document.querySelector('#userAttemptLine')
        if (attemptRow) {
            const charElements = attemptRow.querySelectorAll('.attempt-char .char-placeholder')
            charElements.forEach((charElement, index) => {
                charElement.textContent = userWord[index] || ''
            })
        }
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
