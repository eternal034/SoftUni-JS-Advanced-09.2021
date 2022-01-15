function diagonalSums(matrix) {
    const last = matrix.length;
    console.log(last);
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < last; i++) {
        sum1 += matrix[i][i];
        sum2 += matrix[i][last - 1 - i]
    }

    console.log(`${sum1} ${sum2}`);
}

diagonalSums([[20, 40],
[10, 60]]);