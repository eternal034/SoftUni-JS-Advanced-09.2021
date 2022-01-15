class Company {
    constructor() {
        this.departments = new Map();
    };

    static Employee = class Employee {
        constructor(employeeName, salary, position) {
            Object.assign(this, {
                employeeName,
                salary,
                position
            });
        }

        get employeeName() {
            return this._employeeName;
        }

        set employeeName(value) {
            if (value === undefined || value === null || value === '') {
                throw new Error('Invalid input!')
            }

            this._employeeName = value;
        }

        get salary() {
            return this._salary;
        }

        set salary(value) {
            if (value < 0) {
                throw new Error('Invalid input!');
            }

            this._salary = value;
        }

        get position() {
            return this._position;
        }

        set position(value) {
            if (value === undefined || value === null || value === '') {
                throw new Error('Invalid input!')
            }

            this._position = value;
        }

        compareTo(other) {
            let salaryCompare = other.salary - this.salary;
            if (salaryCompare === 0) {
                return this.employeeName.localeCompare(other.employeeName);
            } else {
                return salaryCompare;
            }
        }

        toString() {
            return `${this.employeeName} ${this.salary} ${this.position}`;
        }


    };
    addEmployee(employeeName, salary, position, department) {
        if (department === undefined || department === null || department === '') {
            throw new Error('Invalid input!')
        }

        if (!this.departments.has(department)) {
            this.departments.set(department, []);
        };

        let employee = new Company.Employee(employeeName, salary, position);
        let employees = this.departments.get(department);
        employees.push(employee)
        return `New employee is hired. Name: ${employeeName}. Position: ${position}`;
    };

    bestDepartment() {
        let sortedDepartments = Array.from(this.departments)
            .sort(([dep1Name, dep1Employees], [dep2Name, dep2Employees]) => {
                return this._getAverageSalary(dep2Name) - this._getAverageSalary(dep1Name);
            });

        let [bestDepartmentName, bestDepartmentEmployees] = sortedDepartments[0];
        bestDepartmentEmployees.sort((e1, e2) => e1.compareTo(e2));
        let bestDepartmentMessage = `Best Department is: ${bestDepartmentName}\nAverage salary: ${this._getAverageSalary(bestDepartmentName).toFixed(2)}`;
        let employeesMessage = bestDepartmentEmployees.map(e => e.toString()).join('\n');

        return `${bestDepartmentMessage}\n${employeesMessage}`;
    };

    _getAverageSalary(deparmentName) {
        let currentDepartment = this.departments.get(deparmentName);
        let averageSalary = currentDepartment.reduce((acc, e) => acc + e.salary, 0) / currentDepartment.length;
        return averageSalary;
    };
};

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
/*Best Department is: Construction
Average salary: 1500
Stan 2000 architect
Stanimir 2000 engineer
Pesho 1500 electrical engineer
Slavi 500 dyer*/