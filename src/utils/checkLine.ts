export const checkLineCharacters = ({userWord, city}: {userWord: string, city: string}) => {
    const userWordArray = userWord.split('')
    const cityArray = city.split('')

    const newCharStatus = Array(cityArray.length).fill('default');
    const usedLetters = Array(cityArray.length).fill(false);

    userWordArray.forEach((char, index) => {
        if (char === cityArray[index]) {
            newCharStatus[index] = 'correct';
            usedLetters[index] = true
        }
    });

    userWordArray.forEach((char, index) => {
        if(newCharStatus[index] !== 'correct'){
            const wrongPlaceIndex = cityArray.findIndex(
                (cityChar, cityIndex) => cityChar === char && !usedLetters[cityIndex]
            )

            if (wrongPlaceIndex !== -1){
                newCharStatus[index] = 'wrongplace';
                usedLetters[wrongPlaceIndex] = true
            }
        }
    })

    return newCharStatus
} 