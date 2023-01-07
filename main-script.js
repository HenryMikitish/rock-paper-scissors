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

    let userPlay = pullUser();
    let computerPlay =pullComputer();

    if(userPlay == computerPlay) {
        alert('You and the computer picked the same Type, so it\'s a draw!');
    }
    else if(
        userPlay == 'grass' && computerPlay == 'fire' ||
        userPlay == 'fire' && computerPlay == 'water' ||
        userPlay == 'water' && computerPlay == 'grass'
        ) {
        alert('The computer picked the Type that beats you, so you lose!')
    }
    else if(
        userPlay == 'grass' && computerPlay == 'water' ||
        userPlay == 'fire' && computerPlay == 'grass' ||
        userPlay == 'water' && computerPlay == 'fire'
    ) {
        alert('The computer picked the Type weak to you, so you win!')
    }
};

function pullComputer() {
    return randomElement(computerPlays);
};

//Converts the user console input into item to be used by playRound
function pullUser() {
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