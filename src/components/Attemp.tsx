
import './attemp.css';

export const Attemp = ({ userWord, display, charStatus } : {userWord: string, display: boolean, charStatus: string[]}) => {

    return (
        <div className='attempt-row'>   
            {
                Array.from(userWord).map((char, charIndex) => (
                    <div key={charIndex} className={`attempt-char ${display ? charStatus[charIndex] : ''}`}>
                        <span className='char-placeholder'>{display ? char : ""}</span>
                    </div>
                ))
            }
        </div>
    );
};
