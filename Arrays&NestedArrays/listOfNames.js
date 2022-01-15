function listOfnames(list) {
    let sorted = list.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < sorted.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`);
    };
}

listOfnames(["John", "Bob", "Christina", "Ema"]);