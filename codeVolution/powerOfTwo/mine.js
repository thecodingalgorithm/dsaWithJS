// my solution

function checkIsPowerOfTwo(n) {
    let isPowerOfTwo = 0

    for (i = 1; i <= n / 2; i++) {
        if (n === Math.pow(2, i)) {
            isPowerOfTwo += 1
        }
    }

    return isPowerOfTwo > 0 ? true : false
}


console.log(checkIsPowerOfTwo(1)) // false
console.log(checkIsPowerOfTwo(0)) // false
console.log(checkIsPowerOfTwo(5)) // false
console.log(checkIsPowerOfTwo(4)) // true
console.log(checkIsPowerOfTwo(6)) // false
console.log(checkIsPowerOfTwo(8)) // true



