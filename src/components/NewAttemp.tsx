import { useEffect, useState } from 'react';
import './attemp.css';

export const NewAttemp = ({ word, checkLine, nextLine }: { word: string, checkLine: (input:string)=> void, nextLine: (input: string) => void }) => {
    const [userWord, setuserWord] = useState('')

    const handleClick = (event: KeyboardEvent) => {
        const key = event.key;
        setuserWord(prev => {
            if (key === 'Backspace') {
                return prev.slice(0, -1);
            } else if(key === 'Enter' && prev.length == word.length){
                checkLine(prev)
                setTimeout(() => nextLine(prev), 0);
                return '';
            } else if (/^[a-zA-Z]$/.test(key) && prev.length < word.length) {
                return prev + key.toLocaleUpperCase();
            }
            return prev;
        });
    };


    useEffect(() => {
        window.addEventListener('keydown', handleClick);
        return () => {
            window.removeEventListener('keydown', handleClick);
        };
    }, []);
    


    useEffect(() => {
        const attemptRow = document.querySelector('#userAttemptLine');
        if (attemptRow) {
            const charElements = attemptRow.querySelectorAll('.attempt-char .char-placeholder');
            charElements.forEach((charElement, index) => {
                charElement.textContent = userWord[index] || '';
            });
        }
    }, [userWord]);

    return (
        <div className='attempt-row' id='userAttemptLine'>   
            {
                Array.from({length: word.length}).map((_, charIndex) => (
                    <div key={charIndex} className='attempt-char'>
                        <span className='char-placeholder'></span>
                    </div>
                ))
            }
        </div>
    );
};
