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
            stopGame(play);
        } else {
            gameField[pos[0]][[pos[1]]] = symbol;
            console.log(drawField(gameField));
            return checkVictory(gameField, symbol);
        }
    } else {
        return `game is stoped`
    }
}

function checkVictory (field, symbol) {
    if(field[0][0] === symbol && field[0][1] === symbol && field[0][2] === symbol){
        return `${symbol} Winner!`
    }
    if(field[1][0] === symbol && field[1][1] === symbol && field[1][2] === symbol){
        return `${symbol} Winner!`
    }
    if(field[2][0] === symbol && field[2][1] === symbol && field[2][2] === symbol){
        return `${symbol} Winner!`
    }

    if(field[0][0] === symbol && field[1][0] === symbol && field[2][0] === symbol){
        return `${symbol} Winner!`
    }
    if(field[0][1] === symbol && field[1][1] === symbol && field[2][1] === symbol){
        return `${symbol} Winner!`
    }
    if(field[0][2] === symbol && field[1][2] === symbol && field[2][2] === symbol){
        return `${symbol} Winner!`
    }

    if(field[0][0] === symbol && field[1][1] === symbol && field[2][2] === symbol){
        return `${symbol} Winner!`
    }
    if(field[0][2] === symbol && field[1][1] === symbol && field[2][0] === symbol){
        return `${symbol} Winner!`
    }
    return 'tie'
}

function checkField (field) {
    let result = [];
    for(let i = 0; i < field.length; i += 1) {
        result.push(field[i].some((pos) => pos === ' '));
    }
    return result.some((bool) => bool === true)
}

function stopGame (state) {
    return state = false;
}

function main (){
    go([0,0],'x');
    go([1,0],'o');
    go([2,0],'o');

    go([0,1],'o');
    go([1,1],'x');
    go([2,1],'x');

    go([0,2],'x');
    go([1,2],'x');
    console.log(go([2,2],'o'))
    console.log(go([2,2],'x'))
    console.log(play)
}

main();