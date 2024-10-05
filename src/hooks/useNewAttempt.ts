import { useState } from 'react'
import { useGameLogic } from './gameFeatures';

export const useNewAttempt = ({city}:{city:string}) => {

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

    const keydown = () => {
        window.addEventListener('keydown', handleClick)
        return () => {
            window.removeEventListener('keydown', handleClick)
        }
    }

    const printLetters = () => {
        const attemptRow = document.querySelector('#userAttemptLine')
        if (attemptRow) {
            const charElements = attemptRow.querySelectorAll('.attempt-char .char-placeholder')
            charElements.forEach((charElement, index) => {
                charElement.textContent = userWord[index] || ''
            })
        }
    }

    return {
        userWord,
        keydown,
        printLetters
    }

}