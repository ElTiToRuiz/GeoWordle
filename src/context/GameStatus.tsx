import React, { createContext, useState } from "react"
import { Children, GameStatus } from "../utils/interface";

export const GameStatusContext = createContext<GameStatus>({
    win: false,
    setWin: () => {},
    end: false,
    setEnd: () => {},
    gameStarted: false,
    setGameStarted: () => {}
});

export const GameStatusProvider: React.FC<Children> = ({ children }) => {
    const [win, setWin] = useState<boolean>(false)
    const [end, setEnd] = useState<boolean>(false)
    const [gameStarted, setGameStarted] = useState<boolean>(false)

    return (
        <GameStatusContext.Provider value={{ win, setWin, end, setEnd, gameStarted, setGameStarted }}>
            {children}
        </GameStatusContext.Provider>
    )
}

