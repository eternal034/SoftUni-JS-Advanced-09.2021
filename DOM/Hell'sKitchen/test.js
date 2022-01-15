
function factory(carObj) {

    const output = {};

    function engine(power) {
        if (power <= 90) {
            return { power: 90, volume: 1800 };
        } else if (power <= 120) {
            return { power: 120, volume: 2400 };
        } else {
            return { power: 200, volume: 3500 };
        }
    }

    let propWheelSize = carObj.wheelsize % 2 == 0 ?
        carObj.wheelsize - 1 : carObj.wheelsize;


    output.model = carObj.model;
    output.engine = engine(carObj.power);
    output.carriage = { type: carObj.carriage, color: carObj.color };
    output.wheelsize = new Array(4).fill(propWheelSize, 0, 3);

    return output;

}

console.log(factory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));

console.log(factory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));