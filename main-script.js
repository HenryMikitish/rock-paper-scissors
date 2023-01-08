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

//Plays a round of the game
function playRound() {

    //Counts the wins and losses of the player
    const wins = ['Start'];
    const losses = ['Start'];

    for (i = 1; i = 1; i) {

        if(wins.length == 4) {
            alert('You win the best-of-five!');
            throw 'exit';
        }
        else if(losses.length == 4) {
            alert('You lose the best-of-five!')
            throw 'exit';
        }
        //The actual round of the game that plays if no one has won yet
        else {
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
                alert('The computer picked the Type that beats you, so you lose!');
                losses.push('L');
            }
            else if(
                userPlay == 'grass' && computerPlay == 'water' ||
                userPlay == 'fire' && computerPlay == 'grass' ||
                userPlay == 'water' && computerPlay == 'fire'
            ) {
                alert('The computer picked the Type weak to you, so you win!')
                wins.push('W');
            }
            else {
                alert('Remember, Grass beats Water, Fire beats Grass, and Water beats Fire!');
                throw 'exit';
            }
        }   
    } 
};

//Gets the computer's play from a randomizing function + an array
function pullComputer() {
    return randomElement(computerPlays);
};

//Converts the user console input into item to be used by playRound
function pullUser() {
    let x = prompt('Pick your Type: Grass, Fire, or Water! Win a best-of-five vs. the computer, who will pick a Type, too, a la "Rock Paper Scissors." Let\'s play!');

    //Handles everything but cancels, etc.
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
        //The playRound() function handles the null
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