import './../style/attemp.css';

export const Attempt = ({ userWord, charStatus } : {userWord: string, charStatus: string[]}) => {
    
    return (
        <div className='attempt-row'>
            {
                Array.from(userWord).map((_, index) => (
                    <div key={index} className={`attempt-char ${charStatus && charStatus.length > 0 ? charStatus[index] : ''}`}>
                        <span className='char-placeholder'>{charStatus && charStatus.length > 0 ? userWord[index] : ''}</span>
                    </div>
                ))
            }
        </div>
    );
};
