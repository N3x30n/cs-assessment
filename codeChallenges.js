function addToZero (arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i]
        for (let k = 0; k < arr.length; k++) {
            let comparedNumber = arr[k]
            if (currentNumber + comparedNumber === 0 && i !== k) {
                return true
            }
        }
    }

    return false
}

//runtime complexity: O(n)


function uniqueChar (str){
    for (i = 0; i < str.length; i++){
        for(j = i + 1;j < str.length; j++){
            if(str[i] === str[j]){
                
                return false
            }
        }
    }
    return true
}
//runtime complexity: O(n)

function isPangram (str) {
    let counter = 0
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let compareStr = str.toLowerCase().split('')
    for(let i = 0; i < str.length; i++){
        if(compareStr[i] === ' '){
            compareStr.splice(i,1)
        }
        for (let j = i+1; j < compareStr.length; j++){
            if(compareStr[i] === compareStr[j]){
                compareStr.splice(j,1)
            }
        }
        for(let k = 0; k < alphabet.length; k++){     
            if(compareStr[i] === alphabet[k]){
                // console.log(compareStr[i])
                counter++
                // console.log(counter)
            }
        }
    }
    if (counter === 26 ){
        return true
    } else {
        return false
    }
}
//runtime complexity: O(n^2)

function longestWord (arr){
    let compareStr;
    for(let i = 0; i < arr.length; i++){
        compareStr = arr[i]
        for(let j = i+1; j < arr.length; j++){
            if(compareStr.length > arr[j].length){
                return compareStr.length
            } else if( compareStr.length < arr[j].length){
                compareStr = arr[j]
            }
        }
    }
}
// console.log(longestWord(["hi", "hello",'sup']))

//runtime complexity: O(n)