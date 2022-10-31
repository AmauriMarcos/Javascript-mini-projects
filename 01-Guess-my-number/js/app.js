'use strict';

/* buttons */
const checkButton = document.querySelector('.btn-check');
const againButton = document.querySelector('.btn-again');

/* guess number */
const input = document.querySelector('.input-guess');

/* Hidden secret number AND text message that needs to be changed according with results */
let mySecret = document.querySelector('.number');
let message = document.querySelector('.message');

/* score and highscore number to be displayed */
let scoreNumber = document.querySelector('.score-number');
let highscoreNumber = document.querySelector('.highscore-number');

let score = 20;
let highscore = 0;

if(score === 20 && highscore === 0){
    highscoreNumber.innerHTML = 0;
}

/* My Secret number */
let secretNumber = Math.floor(Math.random()*20+1);

/* Check event to compare guess number against secret number */
checkButton.addEventListener('click', () => {
    let guessNumber = input.value
    
    if(+guessNumber < secretNumber){
        subtractOneFromScoreAndShowAHint('Too low!');
       
    }else if(+guessNumber > secretNumber){
        subtractOneFromScoreAndShowAHint('Too hight!');

    }else if(+guessNumber === secretNumber){
        message.innerHTML = 'You got it right!'
        mySecret.innerHTML = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        scoreNumber.innerHTML = score;
        score = score;

        if(score > highscore){
            highscoreNumber.innerHTML = score;
            highscore = score;
            console.log(highscore)
        }
    }
});

againButton.addEventListener('click', () => {
    secretNumber = Math.floor(Math.random()*20+1);
    score = 20;
    scoreNumber.innerHTML = 20;
    message.innerHTML = 'Start guessing...'
    document.querySelector('body').style.backgroundColor = '#222';
    mySecret.innerHTML = '?'

    if(+highscore === 0 || highscore === 20){
        let highscoreNumber = document.querySelector('.highscore-number');
        console.log(highscore)
        highscoreNumber.innerHTML = 0;
    }
   
    let guessNumber = document.querySelector('.input-guess');
    guessNumber.value = '';
});


const subtractOneFromScoreAndShowAHint = (hint) => {
    message.innerHTML = hint
    scoreNumber.innerHTML = score -1;
    score -= 1;
}