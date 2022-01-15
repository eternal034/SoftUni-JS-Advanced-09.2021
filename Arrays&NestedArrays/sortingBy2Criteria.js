function sortingBy2Criteria(array) {
    let sorted = array.sort((a, b) => {
        let alphabetical = a.localeCompare(b);
        let length = a.length - b.length

        return length || alphabetical;
    });

    console.log(sorted.join('\n'));
}

sortingBy2Criteria(['test',
    'Deny',
    'omen',
    'Default']
)