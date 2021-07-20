let gameField = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
]

let play = true;

function drawField(field) {
    let result = [];
    for(let i = 0; i < field.length; i += 1) {
        result.push(field[i].join('|'))
    }
    return result.join('\n')
}

function go(pos, symbol) {
    if(play === true) {
        if(!checkField(gameField)) {
            stopGame();
        } else {
            gameField[pos[0]][[pos[1]]] = symbol;
            console.log(drawField(gameField));
            return console.log(checkVictory(gameField, symbol));
        }
    } else {
        console.log('Игра остановлена. Ход невозможен')
    }
}

function checkVictory (field, symbol) {
    if(field[0][0] === symbol && field[0][1] === symbol && field[0][2] === symbol){
        stopGame();
        return `${symbol} Победил!` 
    }
    if(field[1][0] === symbol && field[1][1] === symbol && field[1][2] === symbol){
        stopGame();
        return `${symbol} Победил!`
    }
    if(field[2][0] === symbol && field[2][1] === symbol && field[2][2] === symbol){
        stopGame();
        return `${symbol} Победил!`
    }

    if(field[0][0] === symbol && field[1][0] === symbol && field[2][0] === symbol){
        stopGame();
        return `${symbol} Победил!`
    }
    if(field[0][1] === symbol && field[1][1] === symbol && field[2][1] === symbol){
        stopGame();
        return `${symbol} Победил!`
    }
    if(field[0][2] === symbol && field[1][2] === symbol && field[2][2] === symbol){
        stopGame();
        return `${symbol} Победил!`
    }

    if(field[0][0] === symbol && field[1][1] === symbol && field[2][2] === symbol){
        stopGame();
        return `${symbol} Победил!`
    }
    if(field[0][2] === symbol && field[1][1] === symbol && field[2][0] === symbol){
        stopGame();
        return `${symbol} Победил!`
    }
    if(!checkField(gameField)) return 'Ничья'
    return `Ходи!`
}

function checkField (field) {
    let result = [];
    for(let i = 0; i < field.length; i += 1) {
        result.push(field[i].some((pos) => pos === ' '));
    }
    return result.some((bool) => bool === true)
}

function stopGame () {
    play = false;
}

function main (){
    go([0,0],'x');
    go([1,0],'o');
    go([2,0],'x');

    go([0,1],'o');
    go([1,1],'x');
    go([2,1],'o');

    go([0,2],'x');
    go([1,2],'o');
    go([2,2],'x');

    go([1,1],'o');
    go([1,1],'o');
}

main();