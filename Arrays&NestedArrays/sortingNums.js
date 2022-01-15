function sortingNums(array) {
    let sorted = array.sort((a, b) => a - b);
    let result = [];
    while (array.length != 0) {
        result.push(array.shift(), array.pop());
    }
    return result;
}

console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));