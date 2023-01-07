const computerPlays = [
    'grass',
    'fire',
    'water'
];

function randomElement(myArray) {
    let index = Math.floor(Math.random() * myArray.length); 
	return myArray[index];
}

let x = prompt('Pick either grass, fire, or water!');

function playRound() {

    if(userPlay() == 'grass' && computerPlay() == 'grass') {
        alert('Both picked Grass, so play again!');
    }
};

function computerPlay() {
    return randomElement(computerPlays);
};

//Converts the user console input into item to be used by playRound
function userPlay() {
    let xcorrect = x.toLowerCase();

    if(xcorrect == 'grass') {
        return 'grass';
    }
    else if(xcorrect == 'fire') {
        return 'fire';
    }
    else if(xcorrect == 'water') {
        return 'water';
    }
};

let ans = playRound();