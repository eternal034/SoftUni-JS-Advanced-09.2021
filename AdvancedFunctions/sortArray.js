function sortArray(array, sortType) {
    return sortType == 'asc' ? array.sort((a, b) => a - b) : array.sort((a, b) => b - a);

}

sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');