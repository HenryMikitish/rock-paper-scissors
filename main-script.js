const computerPlays = [
    'grass',
    'fire',
    'water'
];



function playRound() {

    if(userPlay() == 'grass' && computerPlay() == 'grass') {
        //Results and permutations to follow
    }

};



function computerPlay() {
    return randomElement(computerPlays);
}


//Converts the user console input into item to be used by playRound
function userPlay(x) {
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