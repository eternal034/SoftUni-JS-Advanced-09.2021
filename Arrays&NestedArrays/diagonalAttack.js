function diagonalAttack(arr) {
    let matrix = [];
    for (let i = 0; i < arr.length; i++) {
        let row = arr[i]
            .split(' ')
            .map(Number);
        matrix.push(row);
    };

    let last = matrix.length;
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let i = 0; i < last; i++) {
        firstDiagonalSum += matrix[i][i];
        secondDiagonalSum += matrix[i][last - 1 - i];
    }

    if (firstDiagonalSum == secondDiagonalSum) {
        for (let i = 0; i < last; i++) {
            for (let j = 0; j < last; j++) {
                if (i + j < last - 1) {
                    if (i < j && i != j && i + j > 0) {
                        matrix[i][j] = firstDiagonalSum;
                    } else if (i != j) {
                        matrix[i][j] = firstDiagonalSum;
                    }
                } else {
                    if (i > j && i + j != last - 1) {
                        matrix[i][j] = firstDiagonalSum;
                    } else if (i + j != last - 1 && i != j) {
                        matrix[i][j] = firstDiagonalSum;
                    }
                }
            }
        }
        matrix.forEach(row => console.log(row.join(' ')));
    } else {
        matrix.forEach(row => console.log(row.join(' ')));
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'])