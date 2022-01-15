class Company {
    constructor() {
        this.departments = {};
    };

    addEmployee(name, salary, position, department) {
        if (!name || !position || !department || !salary || salary < 0) {
            throw new Error('Invalid input!');
        };


        if (this.departments[department] == undefined) {
            this.departments[department] = [];
        };

        this.departments[department].push({
            name,
            position,
            salary
        });

        return `New employee is hired. Name: ${name}. Position: ${position}`
    };


    bestDepartment() {
        let departmentsByAverageSalary = [...Object.entries(this.departments)]
            .sort(([depNameA, depEmplyeesA], [depNameB, depEmplyeesB]) => {
                return this.getAverageSalary(depNameB) - this.getAverageSalary(depNameA);
            });
        let [bestName, bestEmployees] = departmentsByAverageSalary[0];
        let bestDepartmentString = `Best Department is: ${bestName}\nAverage salary: ${this.getAverageSalary(bestName).toFixed(2)}`;
        bestEmployees.sort((a, b) => {
            let salarySorting = b.salary - a.salary;
            if (salarySorting === 0) {
                return a.name.localeCompare(b.name);
            } else {
                return salarySorting;
            }
        });
        let bestDepartmentEmployeesStringArray = [];
        for (let employee of bestEmployees) {
            bestDepartmentEmployeesStringArray.push(`${employee.name} ${employee.salary} ${employee.position}`)
        }
        let bestDepartmentEmployeesString = bestDepartmentEmployeesStringArray.join('\n')
        return `${bestDepartmentString}\n${bestDepartmentEmployeesString}`
    };

    getAverageSalary(departmentName) {
        let currentDepartment = this.departments[departmentName];
        return currentDepartment.reduce((acc, employee) => acc + employee.salary, 0) / currentDepartment.length;
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