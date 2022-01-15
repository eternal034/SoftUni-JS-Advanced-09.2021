function getFibonator() {
    let previousEl = 1;
    let currentEl = 0;

    function fib() {
        let nextEl = previousEl + currentEl;
        previousEl = currentEl;
        currentEl = nextEl;

        return currentEl;
    }

    return fib
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
