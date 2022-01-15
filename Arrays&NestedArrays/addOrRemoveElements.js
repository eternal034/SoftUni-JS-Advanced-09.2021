function addOrRemoveElements(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'add') {
            newArr.push(i + 1);
        } else if (array[i] == 'remove') {
            if (newArr.length > 0) {
                newArr.pop();
            } else {
                continue;
            }
        }
    }

    if (newArr.length > 0) {
        for (let el of newArr) {
            console.log(el);
        };
    } else {
        console.log(`Empty`);
    }
}

addOrRemoveElements(['remove',
    'remove',
    'remove']
)