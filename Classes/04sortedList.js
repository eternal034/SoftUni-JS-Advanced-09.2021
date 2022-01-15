class List {
    constructor() {
        this.size = 0;
        this.numbers = [];
    }

    add(element) {
        this.numbers.push(element);
        this.numbers.sort((a, b) => a - b);
        this.size++;
        return;
    };

    remove(index) {
        if (index < 0 || index >= this.numbers.length) {
            throw new Error('Invalid index');
        } else {
            this.numbers.splice(index, 1);
            this.size--;
            return;
        }
    };

    get(index) {
        if (index < 0 || index >= this.numbers.length) {
            throw new Error('Invalid index');
        } else {
            return this.numbers[index];
        }
    }
}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));