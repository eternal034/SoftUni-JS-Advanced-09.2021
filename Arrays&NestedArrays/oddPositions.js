function oddPositions(arr) {
    console.log(arr
        .filter((v, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse().join(' '));
}

oddPositions([10, 15, 20, 25]);