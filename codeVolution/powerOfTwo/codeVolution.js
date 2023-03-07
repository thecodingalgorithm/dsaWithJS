// code Volution's Solution

function isPowerOfTwo(n) {
    if(n < 1){
        return false
    }

    while(n > 1){
        if (n % 2 !== 0){
            return true
        }
        n = n/2
    }

    return false
}



console.log(isPowerOfTwo(1)) // false
console.log(isPowerOfTwo(0)) // false
console.log(isPowerOfTwo(5)) // false
console.log(isPowerOfTwo(4)) // true
console.log(isPowerOfTwo(6)) // false
console.log(isPowerOfTwo(8)) // true