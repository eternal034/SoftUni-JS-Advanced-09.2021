function magicalMatrices(array) {
    let magicSum = Number.MIN_SAFE_INTEGER;
    let isMagic = true;

    for (let row = 0; row < array.length; row++) {
        let rowSum = 0;
        for (let col = 0; col < array[row].length; col++) {
            let element = array[row][col];
            rowSum += element;
        }

        if (magicSum === Number.MIN_SAFE_INTEGER) {
            magicSum = rowSum;
        }

        if (rowSum !== magicSum) {
            isMagic = false;
        }
    }

    for (let col = 0; col < array[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < array.length; row++) {
            let element = array[row][col];
            colSum += element
        }
        if (colSum != magicSum) {
            isMagic = false;
        }
    }

    return isMagic;
}

console.log(magicalMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]));