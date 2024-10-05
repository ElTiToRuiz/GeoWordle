import { useContext } from "react";
import { GameStatusContext } from "../context/GameStatus";
import { UserAttemptsContext } from "../context/UserAttempts";
import { checkLineCharacters } from "../service/checkLine";
import { clearLocalStorge, saveCharStatus, saveCity, saveUserInputs } from "../service/localStorage";

export const useGameLogic = () => {
    const { setWin, setEnd, gameStarted, setGameStarted } = useContext(GameStatusContext);
    const { userInputs, setUserInputs, charStatus, setCharStatus } = useContext(UserAttemptsContext);

    const startGame = () => {
        setGameStarted(!gameStarted);
    };

    const nextLine = (newAttempt: string) => {
        console.log(newAttempt);
        if (!userInputs) {
            setUserInputs([newAttempt]);
        } else {
            setUserInputs([...userInputs, newAttempt]);
        }
    };

    const restart = () => {
        clearLocalStorge();
        window.location.reload();
    };

    const checkLine = ({ userWord, city }: { userWord: string; city: string }) => {
        if (userWord === city) {
            setWin(true);
            setEnd(true)
        }

        const newCharStatus: string[] = checkLineCharacters({ userWord, city });
        
        if (charStatus && charStatus.length > 0) {
            setCharStatus([...charStatus, newCharStatus]);
        } else {
            setCharStatus([newCharStatus]);
        }

        
        if (userInputs && userInputs.length + 1 >= city.length) {
            setEnd(true);
        }
    };

    const saveLocalCity = ({city}:{city:string}) => {
        saveCity({city})
    }

    const saveLocalUserInputs = () => {
        saveUserInputs({ userInputs })
    }

    const saveLocalCharStatus = () => {
        saveCharStatus({ charStatus })
    }

    return {
        startGame,
        nextLine,
        restart,
        checkLine,
        saveLocalCity,
        saveLocalUserInputs, 
        saveLocalCharStatus
    };
};
