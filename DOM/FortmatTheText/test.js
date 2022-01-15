function solve(arr) {
    let array = []
    let finalResult = '';
    for (let i = 0; i < arr.length; i += 3) {
        if (arr.length - i < 3) {
            array = arr.slice(i, arr.length);
            finalResult += `<p>${array.join('.')}</p>`
            console.log(finalResult);
        } else {
            array.push(arr[i], arr[i + 1], arr[i + 2]);
            finalResult += `<p>${array.join('.')}</p>`;
            console.log(finalResult);
            array.length = 0;
        }

    }
}

solve([1, 2, 3, 4, 5, 6, 7]);