function juiceFlavors(array) {

    let line = array.shift();

    let flavorsObj = {};
    let flavorsBottles = {};

    while (line != undefined) {
        let [flavor, quantity] = line.split(' => ');
        quantity = Number(quantity);
        if (!flavorsObj[flavor]) {
            flavorsObj[flavor] = quantity;
        } else {
            flavorsObj[flavor] += quantity;
        }

        let bottleQuantity;

        if (!flavorsBottles[flavor] && flavorsObj[flavor] >= 1000) {
            bottleQuantity = Math.floor(flavorsObj[flavor] / 1000);
            flavorsBottles[flavor] = bottleQuantity;
            flavorsObj[flavor] -= bottleQuantity * 1000;
        } else if (flavorsBottles[flavor] && flavorsObj[flavor] >= 1000) {
            bottleQuantity = Math.floor(flavorsObj[flavor] / 1000);
            flavorsBottles[flavor] += bottleQuantity;
            flavorsObj[flavor] -= bottleQuantity * 1000;
        }

        line = array.shift();
    }

    let result = Object.entries(flavorsBottles);

    for (let el of result) {
        console.log(`${el[0]} => ${el[1]}`);
    }
}

juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'])