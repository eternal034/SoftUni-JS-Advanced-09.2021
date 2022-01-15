function solve() {
   const button = document.getElementById('searchBtn');
   button.addEventListener('click', search);

   function search() {
      const input = document.getElementById('searchField');
      let inputText = input.value.toLowerCase();

      let tableItems = Array.from(document.querySelectorAll('tbody tr'));

      tableItems.forEach((el) => {
         let text = el.textContent.toLowerCase();
         if (text.includes(inputText)) {
            el.classList.add('select');
         } else {
            el.classList.remove('select');
         }
      });

      input.value = '';
   }

}