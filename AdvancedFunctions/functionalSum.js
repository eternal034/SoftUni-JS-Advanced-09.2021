function add(num) {
    let sum = 0;

    function add2(number) {
        sum += number;
        return add2;
    }
    add2.toString = () => {
        return sum;
    };
    return add2(num);
}

let a = add(1)(6)(-3);
console.log(a.toString());