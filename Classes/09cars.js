function cars(array) {

    let carsMap = new Map();

    for (let line of array) {
        let [brand, model, quantity] = line.split(' | ');
        quantity = Number(quantity);

        if (!carsMap.has(brand)) {
            carsMap.set(brand, new Map());
        }

        let modelsMap = carsMap.get(brand);
        if (!modelsMap.has(model)) {
            modelsMap.set(model, 0);
        }

        modelsMap.set(model, modelsMap.get(model) + Number(quantity));
    }
    for (let brand of carsMap.keys()) {
        console.log(brand);
        let models = carsMap.get(brand);
        for (let model of models.keys()) {
            console.log(`###${model} -> ${models.get(model)}`);
        }
    }
}

cars(['Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes - Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes - Benz | W163 | 200']);