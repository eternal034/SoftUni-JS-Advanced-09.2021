function robotBreakfast() {
    const successMes = 'Success';
    const availableMicroelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    const recepies = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 3 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
        prepareMeal: (elementOrMeal, quantity) => {
            let neededRecepie = Object.entries(recepies[elementOrMeal]);
            let elementsToSubtract = {};
            let neededQuantityOfElement;
            for (let element of neededRecepie) {
                neededQuantityOfElement = element[1] * quantity;
                if (neededQuantityOfElement > availableMicroelements[element[0]]) {
                    return (`Error: not enough ${element[0]} in stock`);
                }
                elementsToSubtract[element[0]] = neededQuantityOfElement;
            }
            let arrayOfElementsToSubtract = Object.entries(elementsToSubtract);
            for (let el of arrayOfElementsToSubtract) {
                availableMicroelements[el[0]] -= el[1];
            }

            return successMes;
        }
    };

    function postRecievedCommand(input) {
        const [command, elementOrMeal, quantity] = input.split(' ');


        if (command == 'restock') {
            availableMicroelements[elementOrMeal] += Number(quantity);
            return successMes;
        } else if (command == 'prepare') {
            return recepies.prepareMeal(elementOrMeal, Number(quantity));
        } else if (command == 'report') {
            const reportMes = Object.keys(availableMicroelements)
                .map(element => `${element}=${availableMicroelements[element]}`);

            return reportMes.join(' ');
        }
    }

    return postRecievedCommand;
}

let manager = robotBreakfast();
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
/*console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));*/
console.log(manager("report"));

