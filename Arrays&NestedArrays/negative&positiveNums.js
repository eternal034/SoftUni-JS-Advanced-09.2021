function negativePositiveNums(arr) {
    let result = [];
    arr.forEach(element => {
        element < 0 ? result.unshift(element) : result.shift(element);
    });

    console.log(result.join('\n'));

}

negativePositiveNums([7, -2, 8, 9])