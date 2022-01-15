function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      //   TODO:
      let text = document.querySelector('#inputs textarea').value;
      let textArray = JSON.parse(text);
      let bestRestaurantEl = document.querySelector('#bestRestaurant p');
      let workersEl = document.querySelector(`#workers p`);
      let restaurants = {};

      for (let el of textArray) {
         let [restaurantName, workersData] = el.split(' - ');
         //input workers = arr from objects {workerName, salary}
         let inputWorkers = workersData
            .split(', ')
            .map(x => {
               let [workerName, salary] = x.split(' ');
               return { workerName, salary: Number(salary) };
            });

         if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = {
               restaurantName: restaurantName,
               workers: [],
               getAvgSalary: function () {
                  return this.workers.reduce((acc, el) => acc + el.salary, 0) / this.workers.length;
               }
            };
         }

         restaurants[restaurantName].workers = restaurants[restaurantName].workers.concat(inputWorkers);
      }

      let sortedRestoaurants = Object.values(restaurants).sort((a, b) => b.getAvgSalary() - a.getAvgSalary());
      let bestRestaurant = sortedRestoaurants[0];
      let avgSalary = bestRestaurant.getAvgSalary().toFixed(2);
      let sortedWorkers = bestRestaurant.workers.sort((a, b) => b.salary - a.salary);
      let bestWorkerSalary = sortedWorkers[0].salary.toFixed(2);

      let msgBestRestaurant = `Name: ${bestRestaurant.restaurantName} Average Salary: ${avgSalary} Best Salary: ${bestWorkerSalary}`;
      let msgWorkers = sortedWorkers.map(x => `Name: ${x.workerName} With Salary: ${x.salary}`).join(' ');

      bestRestaurantEl.textContent = msgBestRestaurant;
      workersEl.textContent = msgWorkers;
   }
}