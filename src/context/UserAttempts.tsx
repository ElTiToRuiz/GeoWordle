import React, { createContext, useState} from 'react';
import { loadCharStatus, loadUserInputs } from "../service/localStorage";
import { Children, UserAttempt } from '../utils/interface';


export const UserAttemptsContext = createContext<UserAttempt>({
    userInputs: [],
    setUserInputs: () => {},
    charStatus: [],
    setCharStatus: () => {}
});

export const UserAttemptsProvider: React.FC<Children> = ({ children }) => {
    const [userInputs, setUserInputs] = useState<string[]>(() => loadUserInputs() || []);
    const [charStatus, setCharStatus] = useState<string[][]>(() => loadCharStatus() || []);

    return (
        <UserAttemptsContext.Provider value={{ userInputs, setUserInputs, charStatus, setCharStatus }}>
            {children}
        </UserAttemptsContext.Provider>
    );
};