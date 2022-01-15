function evenPositionElement(arr) {
    let newArr = []
    arr.forEach(element => {
        if (arr.indexOf(element) % 2 == 0) {
            newArr.push(element);
        }
    });

    console.log(newArr.join(' '));
}

evenPositionElement(['20', '30', '40', '50', '60']);