const yourScoreBoard = document.querySelector('.yourscore');
const oppScoreBoard = document.querySelector('.oppscore');
let yourScore = 0;
let oppScore = 0;
choice = [];
compchoice = [];
const yourPlay = document.querySelector('.yourplay');
const oppPlay = document.querySelector('.oppplay');
const declaration = document.querySelector('.declare')

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

gbtn.addEventListener('click', function() {
    choice.push('grass');
    pullComputer();
    compareResults();
});


fbtn.addEventListener('click', function() {
    choice.push('fire');
    pullComputer();
    compareResults();
});

wbtn.addEventListener('click', function() {
    choice.push('water');
    pullComputer();
    compareResults();
});

function compareResults() {
    if (choice[0] == 'grass') {yourPlay.textContent = 'Go, Grass!'};
    if (choice[0] == 'fire') {yourPlay.textContent = 'Go, Fire!'};
    if (choice[0] == 'water') {yourPlay.textContent = 'Go, Water!'};
    if (compchoice[0] == 'grass') {oppPlay.textContent = 'Go, Grass!'};
    if (compchoice[0] == 'fire') {oppPlay.textContent = 'Go, Fire!'};
    if (compchoice[0] == 'water') {oppPlay.textContent = 'Go, Water!'};

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
    
    else {declaration.textContent = 'IT\'S A TIE'};

    choice.splice(0, choice.length);
    compchoice.splice(0, compchoice.length);

    yourScoreBoard.textContent = yourScore;
    oppScoreBoard.textContent = oppScore;

}