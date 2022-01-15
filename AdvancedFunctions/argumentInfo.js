function solve(...params) {
    let occurences = {};
    let argumentsResult = [];

    params.forEach(p => {
        let typeOfParam = typeof (p);
        argumentsResult.push(`${typeOfParam}: ${p}`);
        occurences[typeOfParam] = occurences[typeOfParam] !== undefined ? occurences[typeOfParam]++ : 1;

    });

    let sortedKeys = Object.keys(occurences).sort((a, b) => occurences[b] - occurences[a]);

    for (let key of sortedKeys) {
        argumentsResult.push(`${key} = ${occurences[key]}`);
    }

    return argumentsResult.join('\n');

}

console.log(solve('cat', 42, function () { console.log('Hello world!'); }
));