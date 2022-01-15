function ticTacToe(array) {
    function hasWin(field, coordinates) {
        const [x, y] = coordinates;
        if ((field[0][y] == field[1][y] == field[2][y]) && field[0][y] != false) {
            return true;
        } else if ((field[x][0] == field[x][1] == field[x][2]) && field[x][0] != false) {
            return true;
        } else if ((field[0][0] == field[1][1] == field[2][2] && field[x][0] != false) ||
            (field[0][2] == field[1][1]) == field[2][0] && field[0][0]) {
            return true;
        } else {
            return false;
        }
    }

    function printResult(field) {
        field.forEach(element => {
            console.log(element.join(`  `));
        });
    }
    let gameWon = false;

    const playGround = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let currenPlayerSign = 'X';

    for (let i = 0; i < array.length; i++) {
        const [x, y] = array[i]
            .split(' ')
            .map(Number);

        if (playGround[x][y]) {
            console.log(`This place is already taken. Please choose another!`);
        } else {
            playGround[x][y] = currenPlayerSign;
            if (hasWin(playGround, [x, y])) {
                gameWon = true;
                console.log(`Player ${currenPlayerSign} wins!`);
                printResult(playGround);
                break;
            };
            currenPlayerSign = currenPlayerSign == 'X' ? 'O' : 'X';
        }
    }

    if (!gameWon) {
        console.log(`The game ended! Nobody wins :(`);
        printResult(field);
    }
}

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"])