const yourScoreBoard = document.querySelector('#yourscore');
const oppScoreBoard = document.querySelector('#oppscore');
let yourScore = 0;
let oppScore = 0;
choice = [];
compchoice = [];
const yourPlay = document.querySelector('.yourplay');
const oppPlay = document.querySelector('.oppplay');
const declaration = document.querySelector('.declare');
const resetGame = document.querySelector('#reset');

//Possible plays for the computer
const computerPlays = [
    'grass',
    'fire',
    'water'
];

//Randomizes the computer's play
function randomElement(myArray) {
    let index = Math.floor(Math.random() * myArray.length); 
    return myArray[index];
};

//Gets the computer's play from a randomizing function + an array
function pullComputer() {
    compchoice.push(randomElement(computerPlays));
};

gbtn.addEventListener('click', function(e) {
    e.target.classList.add('gograss');
    choice.push('grass');
    pullComputer();
    compareResults();
    setTimeout(() => {e.target.classList.remove('gograss')}, 100);
});


fbtn.addEventListener('click', function(e) {
    e.target.classList.add('gofire');
    choice.push('fire');
    pullComputer();
    compareResults();
    setTimeout(() => {e.target.classList.remove('gofire')}, 100);
});

wbtn.addEventListener('click', function(e) {
    e.target.classList.add('gowater');
    choice.push('water');
    pullComputer();
    compareResults();
    setTimeout(() => {e.target.classList.remove('gowater')}, 100);
});

function compareResults() {
    if (choice[0] == 'grass') {
        yourPlay.textContent = 'Go, Grass!';
        yourPlay.style.color = 'rgb(75, 177, 75)';
    };
    if (choice[0] == 'fire') {
        yourPlay.textContent = 'Go, Fire!';
        yourPlay.style.color = 'rgb(248, 98, 39)';
    };
    if (choice[0] == 'water') {
        yourPlay.textContent = 'Go, Water!';
        yourPlay.style.color = 'rgb(70, 199, 242)';
    };

    if (compchoice[0] == 'grass') {
        oppPlay.textContent = 'Go, Grass!';
        oppPlay.style.color = 'rgb(75, 177, 75)';
    }
    if (compchoice[0] == 'fire') {
        oppPlay.textContent = 'Go, Fire!';
        oppPlay.style.color = 'rgb(248, 98, 39)';
    }
    if (compchoice[0] == 'water') {
        oppPlay.textContent = 'Go, Water!';
        oppPlay.style.color = 'rgb(70, 199, 242)';
    }

    if (
        choice[0] == 'grass' && compchoice[0] == 'water' ||
        choice[0] == 'fire' && compchoice[0] == 'grass' ||
        choice[0] == 'water' && compchoice[0] == 'fire'
    ) {
        declaration.textContent = 'YOU WIN';
        yourScore++}

    else if (
        compchoice[0] == 'grass' && choice[0] == 'water' ||
        compchoice[0] == 'fire' && choice[0] == 'grass' ||
        compchoice[0] == 'water' && choice[0] == 'fire'
    ) {
        declaration.textContent = 'YOU LOSE';
        oppScore++}
    
    else {
        declaration.textContent = 'IT\'S A TIE';
    };

    if ((choice[0] == 'grass' && compchoice[0] == 'grass') ||
        (choice[0] == 'fire' && compchoice[0] == 'fire') ||
        (choice[0] == 'water' && compchoice[0] == 'water')) {
            declaration.classList.remove('tie', 'waterwin', 'firewin', 'grasswin');
            declaration.classList.add('tie'); 
        }

    if ((choice[0] == 'grass' || compchoice[0] == 'grass') &&
        (choice[0] == 'water' || compchoice[0] == 'water')) {
            declaration.classList.remove('tie', 'waterwin', 'firewin', 'grasswin');
            declaration.classList.add('grasswin'); 
    }
    
    if ((choice[0] == 'grass' || compchoice[0] == 'grass') &&
        (choice[0] == 'fire' || compchoice[0] == 'fire')) {
            declaration.classList.remove('tie', 'waterwin', 'firewin', 'grasswin');
            declaration.classList.add('firewin'); 
    }

    if ((choice[0] == 'water' || compchoice[0] == 'water') &&
        (choice[0] == 'fire' || compchoice[0] == 'fire')) {
            declaration.classList.remove('tie', 'waterwin', 'firewin', 'grasswin');
            declaration.classList.add('waterwin'); 
    }

    choice.splice(0, choice.length);
    compchoice.splice(0, compchoice.length);

    yourScoreBoard.textContent = yourScore;
    oppScoreBoard.textContent = oppScore;

    if (oppScore == 3 || yourScore == 3) {

        if (oppScore == 3) {declaration.textContent = 'YOU LOSE THE GAME'};
        if (yourScore == 3) {declaration.textContent = 'YOU WIN THE GAME'};

        document.getElementById('gbtn').disabled = true;
        document.getElementById('fbtn').disabled = true;
        document.getElementById('wbtn').disabled = true;

        let endGame = document.createElement('button');
        endGame.textContent = 'Reset';
        endGame.setAttribute ('id', 'kill')
        resetGame.appendChild(endGame);
    }

reset.addEventListener('click', function() {
    let redoGame = document.getElementById('kill');
    redoGame.remove();
   
    yourScore = 0;
    oppScore = 0;

    yourPlay.textContent = '';
    yourPlay.style.color = 'black';
    oppPlay.textContent = '';
    oppPlay.style.color = 'black';
    declaration.textContent = '';
    yourScoreBoard.textContent = yourScore;
    oppScoreBoard.textContent = oppScore;

    declaration.classList.remove('tie', 'waterwin', 'firewin', 'grasswin'); 

    document.getElementById('gbtn').disabled = false;
    document.getElementById('fbtn').disabled = false;
    document.getElementById('wbtn').disabled = false;
});


}