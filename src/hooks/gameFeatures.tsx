import { useContext } from "react";
import { GameStatusContext } from "../context/GameStatus";
import { UserAttemptsContext } from "../context/UserAttempts";
import { checkLineCharacters } from "../utils/checkLine";

export const useGameLogic = () => {
    const { setWin, setEnd, setGameStarted } = useContext(GameStatusContext);
    const { userInputs, setUserInputs, charStatus, setCharStatus } = useContext(UserAttemptsContext);

    const startGame = () => {
        setGameStarted(true);
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
        localStorage.clear();
        window.location.reload();
    };

    const checkLine = ({ userWord, city }: { userWord: string; city: string }) => {
        console.log(userWord);
        if (userWord === city) {
            setWin(true);
        }

        const newCharStatus = checkLineCharacters({ userWord, city });
        console.log(newCharStatus);

        if (!charStatus) {
            setCharStatus([newCharStatus]);
        } else {
            setCharStatus([...charStatus, newCharStatus]);
        }

        if (userInputs && userInputs.length + 1 >= city.length) {
            setEnd(true);
        }
    };

    return {
        startGame,
        nextLine,
        restart,
        checkLine,
    };
};
