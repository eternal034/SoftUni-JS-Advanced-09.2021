function solve() {
    //1 select elements
    //2 implement add movie functionality
    //2a attach event listener on[on-screen] button;
    //2b get input values for movie
    //2c convert values where is needed
    //2d create html for movie
    //2e attach html ctructure to vies on screen selection
    //3 implement archuve moive functionality
    //3a attach event listener eash movie's archive button
    //3b get input values for currnet movie to archive
    //3c convert values where needed
    //3d create html structure for archived movie
    //3e attach html structure fot movies on archive section
    //4 implement archived movies delet functionality
    //4a attach event listener each movies delete button
    //4b delete html structure of a deleted movie from dom
    //5 implement archive clear button functionality
    //5a delete archive;s LI elements of dom


    const onScreenBtn = document.querySelector('#container button').addEventListener('click', onScreenApplyer);
    const moviesUl = document.querySelector('#movies ul');
    const archivedUl = document.querySelector('#archive ul');
    const clearBtn = document.querySelector('#archive button').addEventListener('click', clearAll);

    function onScreenApplyer(e) {
        e.preventDefault();


        let [nameInput, hallInput, priceInput] = Array.from(document.querySelectorAll('input[type="text"]'));
        let name = nameInput.value;
        let hall = hallInput.value;
        let price = priceInput.value;

        if (name.trim() !== '' && hall.trim() !== '' && price.trim() !== '' && !isNaN(Number(price))) {
            price = Number(price).toFixed(2);
            let li = document.createElement('li');

            let nameSpan = document.createElement('span');
            nameSpan.textContent = name;

            let hallStrong = document.createElement('strong');
            hallStrong.textContent = `Hall: ${hall}`;

            let ticketSection = document.createElement('div');
            let priceStrong = document.createElement('strong');
            priceStrong.textContent = price;
            let ticketsSoldInput = document.createElement('input');
            ticketsSoldInput.setAttribute('placeholder', 'Tickets Sold');
            let archiveMovieBtn = document.createElement('button');
            archiveMovieBtn.textContent = 'Archive';
            archiveMovieBtn.addEventListener('click', archiveMovie)

            ticketSection.appendChild(priceStrong);
            ticketSection.appendChild(ticketsSoldInput);
            ticketSection.appendChild(archiveMovieBtn);

            li.appendChild(nameSpan);
            li.appendChild(hallStrong);
            li.appendChild(ticketSection);

            moviesUl.appendChild(li);

            nameInput.value = '';
            hallInput.value = '';
            priceInput.value = '';
        }
    }

    function archiveMovie(e) {
        let movieLi = e.target.parentElement.parentElement;
        let movieName = movieLi.querySelector('span').textContent;
        let movieTicketPrice = Number(movieLi.querySelector('div strong').textContent);
        let movieSoldTicketInput = movieLi.querySelector('div input');
        let totalAmount;

        if (movieSoldTicketInput.value.trim() !== '' && !isNaN(Number(movieSoldTicketInput.value))) {
            let soldTicketQuantity = Number(movieSoldTicketInput.value);
            totalAmount = Number(movieTicketPrice * soldTicketQuantity).toFixed(2)

            let archivedMovieLi = document.createElement('li');

            let archivedMovieName = document.createElement('span');
            archivedMovieName.textContent = movieName;
            let archivedMovieTotalAmount = document.createElement('strong');
            archivedMovieTotalAmount.textContent = `Total amount: ${totalAmount}`;
            let archivedMovieDeleteBtn = document.createElement('button');
            archivedMovieDeleteBtn.textContent = 'Delete';
            archivedMovieDeleteBtn.addEventListener('click', deleteArchivedMovie);

            archivedMovieLi.appendChild(archivedMovieName);
            archivedMovieLi.appendChild(archivedMovieTotalAmount);
            archivedMovieLi.appendChild(archivedMovieDeleteBtn);
            movieLi.remove();
            archivedUl.appendChild(archivedMovieLi);
        }
    }

    function deleteArchivedMovie(e) {
        let archivedLi = e.target.parentElement;
        archivedLi.remove();
    }

    function clearAll() {
        archivedUl.innerHTML = '';
    }
}