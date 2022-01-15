function extractIncreasingArraySubsequence(array) {
    let max = Number.MIN_SAFE_INTEGER;
    let result = []

    /*for (let i = 0; i < array.length; i++) {
         if (array[i] >= max) {
             max = array[i];
             result.push(array[i]);
         }
     }
     return result;*/

    array.reduce((accumulated/*result from every iteration*/, current) => {
        if (current >= max) {
            accumulated.push(current);
            max = current;
        }

        return accumulated;
    }, result);

    return result
}

console.log(extractIncreasingArraySubsequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));