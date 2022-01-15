function rotateArray(array, rotationCount) {
    for (let i = 0; i < rotationCount; i++) {
        let lastEl = array.pop();
        array.unshift(lastEl);
    }

    console.log(array.join(' '));
}

rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15)