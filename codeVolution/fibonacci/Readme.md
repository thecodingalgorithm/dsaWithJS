# Fibonnaci Sequence Explanation


### PseudoCode

    init Func: fibonacci(n), where n is an integer
    init: fib = [0, 1], an array variable that stores the first two initial value for any fibonacci sequence

    loop: n starting from when __i__ equals 2 till when __i__ is one less than n

    in each loop, add the value at of the last two index in fib array (i.e i-2 and i-1), then store the result of the addition in to the present index (i, i.e fib[i])

    return fib  



### Big-O

    The time complexity of the algorithm is linear 'O(n)' because there is only one loop used and the input size increases linearly.

    Although, the input size does not start from the initial value, it won't matter when calculating the big-o for time complexity


