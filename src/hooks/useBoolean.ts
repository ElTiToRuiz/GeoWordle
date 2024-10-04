import { useEffect, useState } from "react"
import { loadBoolean } from "../service/localStorage"


export const useBoolean = () => {
    const [win, setWin] = useState<boolean>(false)
    const [end, setEnd] = useState<boolean>(false)
    const [gameStarted, setGameStarted] = useState<boolean>(false)

    useEffect(()=>{
        const saveBoolean = loadBoolean()
        if(saveBoolean){
            setWin(saveBoolean.win)
            setEnd(saveBoolean.end)
            setGameStarted(saveBoolean.gameStarted)
        }
    }, [])

    return { win, setWin, end, setEnd, gameStarted, setGameStarted }
}

