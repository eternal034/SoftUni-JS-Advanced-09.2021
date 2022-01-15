function program(ticketsDataArray, sortCrit) {

    let readyTickets = [];

    class Ticket {
        constructor(destination, price, status) {
            Object.assign(this, {
                destination,
                price,
                status
            });
        }

        compareTo(otherTicket, sortCrit) {
            if (typeof this[sortCrit] === 'string') {
                return this[sortCrit].localeCompare(otherTicket[sortCrit])
            } else {
                return this[sortCrit] - otherTicket[sortCrit];
            }
        }
    }


    for (let el of ticketsDataArray) {
        let [destination, price, status] = el.split('|');
        price = Number(price);
        let ticket = new Ticket(destination, price, status);
        readyTickets.push(ticket);
    }

    readyTickets.sort((a, b) => a.compareTo(b, sortCrit));
    return readyTickets;
}

console.log(program(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));