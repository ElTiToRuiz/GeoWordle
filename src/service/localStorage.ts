import { localStoragePair } from "../utils/interface"


const save = ({data}:{data: localStoragePair}) => {
    localStorage.setItem(data.key, data.value)
}

const load = ({key}:{key: string}) => {
    if(exist({key})){
        return localStorage.getItem(key)
    }else{
        throw Error('Key does not exist')
    }
}

const exist = ({key}:{key: string}) => {
    return localStorage.getItem(key) !== null
}

export const clear = () => {
    localStorage.clear()
}

// CITY
export const saveCity = ({city}:{city:string}) => {
    save({data: {key: 'city', value: city}})
}

export const loadCity = () => {
    try{
        return load({key: 'city'})
    }catch (e){
        return null
        console.log(e)
    }
}

// USER INPUTS
export const saveUserInputs = ({userInputs}:{userInputs:string[]}) => {
    save({data: {key: 'userInputs', value: JSON.stringify(userInputs)}})
}

export const loadUserInputs = () => {
    try{
        const userInputs = load({key: 'userInputs'});
        return userInputs ? JSON.parse(userInputs) : null;
    }catch (e){
        console.log(e)
        return null
    }
}


// CHAR STATUS
export const saveCharStatus = ({charStatus}:{charStatus:string[][]}) => {
    save({data: {key: 'charStatus', value: JSON.stringify(charStatus)}})
}

export const loadCharStatus = () => {
    try{
        const charStatus = load({key: 'charStatus'});
        return charStatus ? JSON.parse(charStatus) : null;
    }catch (e){
        console.log(e)
        return null
    }
}

export const clearLocalStorge = () => {
    localStorage.clear()
}