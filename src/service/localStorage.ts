export type localStorage = {
    key: string,
    value: string
}

export type gameBoolean = {
    win: boolean,
    end: boolean,
    gameStarted: boolean
}

const save = ({data}:{data:localStorage}) => {
    localStorage.setItem(data.key, data.value)
}

const load = ({key}:{key:string}) => {
    if(exist({key})){
        return localStorage.getItem(key)
    }else{
        throw Error('Key does not exist')
    }
}

const exist = ({key}:{key:string}) => {
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

// BOOLEAN
export const saveBoolean = ({boolean}:{boolean: gameBoolean}) => {
    save({data: {key: 'boolean', value: JSON.stringify(boolean)}})
}

export const loadBoolean = () => {
    try{
        const boolean =  load({key: 'boolean'})
        return boolean ? JSON.parse(boolean) : null
    }catch (e){
        console.log(e)
        return null
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
