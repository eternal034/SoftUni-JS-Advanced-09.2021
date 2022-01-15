class Person {
    constructor(firstName, lastName, age, email) {
        Object.assign(this, {
            firstName,
            lastName,
            age,
            email
        });
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

const person1 = new Person('George', 'Georgiev', '30', 'georgiev7900@gmail.com');

console.log(person1);