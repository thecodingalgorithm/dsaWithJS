function fibonacciTs(n: number): object {
    const fib: object = [0, 1]

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }

    return fib
}


console.log(fibonacciTs(2))
console.log(fibonacciTs(5))
console.log(fibonacciTs(7))