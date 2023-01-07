const computerPlays = [
    'grass',
    'fire',
    'water'
];

function randomElement(myArray) {
    let index = Math.floor(Math.random() * myArray.length); 
	return myArray[index];
}

function playRound() {

    for (let i = 0; i < 5; i++) {

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
        else {
            alert('Remember, Grass beats Water, Fire beats Grass, and Water beats Fire!');
            break;
        }
    }
    
};

function pullComputer() {
    return randomElement(computerPlays);
};

//Converts the user console input into item to be used by playRound
function pullUser() {
    let x = prompt('Pick your Type: Grass, Fire, or Water!');

    if (x != null) {
        let xcorrect = x.trim().toLowerCase();

        if(xcorrect == 'grass') {
            return 'grass';
        }
        else if(xcorrect == 'fire') {
            return 'fire';
        }
        else if(xcorrect == 'water') {
            return 'water';
        }
        else {
            return null;
        }
    }
    else {
        alert('Remember, Grass beats Water, Fire beats Grass, and Water beats Fire!');
        throw 'exit';
    }
};

let ans = playRound();