
// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// Starting condition
score0El.textContent =0;
score1El.textContent=0;
diceEl.classList.add('hidden');

let scores = [0,0];
let curentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function(){
     

    curentScore=0;
    document.getElementById(`current--${activePlayer}`).textContent = curentScore;
    activePlayer = activePlayer ===0 ? 1: 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

};



// Rolling dice functionality
btnRoll.addEventListener('click',function() {
    if (playing){

    
    // 1. Generating a random dice roll
    const dice = Math.floor((Math.random() * 6) + 1);
    

    // 2. Display dice
    diceEl.classList.remove('hidden');
    /* diceEl.src = `dice-${dice}.png` */
    diceEl.src = `{% static 'project/images/dice-${dice}.png' %}`



    // 3. check for rolled 1 : if true, switch to next player 
    if (dice !== 1){
        curentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = curentScore;

    }
    else{
        switchPlayer();

    }

    }

});

// HOLD BUTTON

btnHold.addEventListener('click',function(){
    // 1 . ADD CURRENT SCORE TO ACTIVE PLAYER'S SCORE
    if (playing){

    scores[activePlayer] += curentScore;

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check if player has won the game
    if (scores[activePlayer]>=100){
        
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        playing= false;
        
    }
    else{
        // 3. switching player
        switchPlayer();
    }
    }

});


// RESETING THE GAME
btnNew.addEventListener('click',function(){
    scores = [0,0];
    curentScore = 0;
    playing = true;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    current0El = document.getElementById('current--0').textContent = 0;
    current1El = document.getElementById('current--1').textContent = 0;
    score0El = document.getElementById('score--0').textContent =0;
    score1El = document.getElementById('score--1').textContent = 0;




})

