let humanScore = 0;
let pcScore = 0;
const humanScoreResults = document.getElementById('humanScore');
const pcScoreResults = document.getElementById('computerScore');
const resultGame = document.getElementById('resultGame');
const user = document.getElementById('user');
const pc = document.getElementById('pc');
const results = document.getElementById('results');

const rockPressed = document.getElementById('rockBtn');
const paperPressed = document.getElementById('paperBtn');
const scissorsPressed = document.getElementById('scissorsBtn');

function actionPC() {
    const optionsPC = ['Piedra', 'Papel', 'Tijera'];
    const randomAction = Math.floor(Math.random() * 3 );
    const moveAction = optionsPC[randomAction];
    return moveAction;
}

function userWinner(userResponse, pcResponse) {
    humanScore++;
    humanScoreResults.innerHTML = 'Tú: ' + humanScore;
    results.style.visibility = 'visible';
    user.innerHTML = "  " + userResponse;
    pc.innerHTML = "  " + pcResponse;
    resultGame.innerHTML = 'Ganaste :D';
}

function userLoser(userResponse, pcResponse) {
    pcScore++;
    pcScoreResults.innerHTML = 'PC: ' + pcScore;
    results.style.visibility = 'visible';
    user.innerHTML = "  " + userResponse;
    pc.innerHTML = "  " + pcResponse;
    resultGame.innerHTML = 'Perdiste :c';
}

function equalsResponse(userResponse, pcResponse) {
    results.style.visibility = 'visible';
    user.innerHTML = "  " + userResponse;
    pc.innerHTML = "  " + pcResponse;
    resultGame.innerHTML = 'Empataste :/';
}

function drawLetters(userResponse, pcResponse) {
    if (userResponse == 'Piedra') {
        user.style.color = '#EB5757';
    }else if (userResponse == 'Papel') {
        user.style.color = '#2D9CDB';
    }else{
        user.style.color = '#6FCF97';
    }

    if (pcResponse == 'Piedra') {
        pc.style.color = '#EB5757';
    }else if (pcResponse == 'Papel') {
        pc.style.color = '#2D9CDB';
    }else{
        pc.style.color = '#6FCF97';
    }
}

function gamePC(option) {
     const movePC = actionPC();
     const movehuman = option;
     switch (movehuman+movePC) {
        case 'PiedraTijera':
        case 'PapelPiedra':  
        case 'TijeraPapel': 
            drawLetters(movehuman, movePC);  
            userWinner(movehuman, movePC);  
         break;

        case 'TijeraPiedra':
        case 'PapelTijera':
        case 'PiedraPapel':
            drawLetters(movehuman, movePC);  
            userLoser(movehuman, movePC);
         break;

        case 'PiedraPiedra':
        case 'PapelPapel':
        case 'TijeraTijera':
            drawLetters(movehuman, movePC);  
            equalsResponse(movehuman, movePC);
            break;
     }
}

function mainGame() {
    rockPressed.addEventListener('click',()=> gamePC('Piedra'));
    paperPressed.addEventListener('click',()=> gamePC('Papel'));
    scissorsPressed.addEventListener('click',()=> gamePC('Tijera'));
}

mainGame();