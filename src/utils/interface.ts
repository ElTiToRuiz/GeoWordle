import { ReactNode } from "react";

export interface Children {
    children: ReactNode;
}

export interface UserAttempt {
    userInputs: string[];
    setUserInputs: (inputs: string[]) => void;
    charStatus: string[][];
    setCharStatus: (status: string[][]) => void;
}

export interface GameStatus {
    win: boolean;
    setWin: (win: boolean) => void;
    end: boolean;
    setEnd: (end: boolean) => void;
    gameStarted: boolean;
    setGameStarted: (gameStarted: boolean) => void;
}

