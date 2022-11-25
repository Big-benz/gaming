// Grab elements from DOM

const resultDisplay = Array.from(document.querySelectorAll(".btn"));

const result = document.querySelector(".result-container-wrapper");

const winningDisplay = document.querySelector(".winning-display");

const losingDisplay = document.querySelector(".losing-display");

const userAnswer = document.querySelector(".user-answer");

const compAnswer = document.querySelector(".computer-answer");

const main_result = document.querySelector(".Result-display");

const resetBtn = document.querySelector(".reset-btn");

const scoreContainer = document.querySelector(".result-container-wrapper");

let userScore = document.querySelector(".user-score");

let compScore = document.querySelector(".computer-score");

// Initial User and Computer Score

userCounter = 0;

compCounter = 0;
 
// Random number function for computer selection

function computerSelection() {
  
  return Math.floor(Math.random() * resultDisplay.length)

}

// Game logic and functionality.

resultDisplay.forEach(function (btn) {
    
  btn.addEventListener("click", function (e) {

    compDisplay = computerSelection();

    if(compDisplay === 0){

        compAnswer.innerHTML = `<img src="ITEMS-ICON/rock.jpg" alt="">`
    }

    else if(compDisplay === 1){

        compAnswer.innerHTML = `<img src="ITEMS-ICON/paper.jpg" alt="">`
    }

    else{

        compAnswer.innerHTML = `<img src="ITEMS-ICON/Scissors.jpg" alt="">`
    }

    if (e.currentTarget) {

      userAnswer.innerHTML = e.currentTarget.innerHTML;

    }
 
    if(compAnswer.innerHTML === `<img src="ITEMS-ICON/rock.jpg" alt="">` && userAnswer.innerHTML === `<img src="ITEMS-ICON/paper.jpg" alt="">`){

        userScoreBoard()

        main_result.innerHTML = "Paper beats Rock, so you win."
        
    }

    if(compAnswer.innerHTML ===  `<img src="ITEMS-ICON/rock.jpg" alt="">` && userAnswer.innerHTML === `<img src="ITEMS-ICON/Scissors.jpg" alt="">`){

        compScoreBoard()

        main_result.innerHTML = "Rock beats Scissors, so you lose"
    
    }

    if(compAnswer.innerHTML === `<img src="ITEMS-ICON/paper.jpg" alt="">` && userAnswer.innerHTML === `<img src="ITEMS-ICON/Scissors.jpg" alt="">`){

        userScoreBoard()

        main_result.innerHTML = "Scissors beats paper, therefore you Win!"
        
    }

    if(compAnswer.innerHTML === `<img src="ITEMS-ICON/paper.jpg" alt="">` && userAnswer.innerHTML === `<img src="ITEMS-ICON/rock.jpg" alt="">` ){

        compScoreBoard()

        main_result.innerHTML = "Paper beats Rock, therefore you Lose!"
        
    }
    if(compAnswer.innerHTML === `<img src="ITEMS-ICON/Scissors.jpg" alt="">` && userAnswer.innerHTML === `<img src="ITEMS-ICON/paper.jpg" alt="">`){

        compScoreBoard()

        main_result.innerHTML = "Scissors beats Paper, so you Lose!"
        
    }
    if(compAnswer.innerHTML === `<img src="ITEMS-ICON/Scissors.jpg" alt="">`&& userAnswer.innerHTML === `<img src="ITEMS-ICON/rock.jpg" alt="">`){

        userScoreBoard()

        main_result.innerHTML = "Rock beats Scissors, so you Win!!"
        
    }

    if(compAnswer.innerHTML === userAnswer.innerHTML){

        main_result.innerHTML = "It's a draw"
        
    }
   
  });

});

// Winning conditions display for User.

function userScoreBoard(){

    if(userCounter === 5){

        winningDisplay.style.opacity = 1;

        losingDisplay.style.opacity = 0;
    
        userScore.innerHTML = `Player Score : ${userCounter}`

    }
    
    if(userCounter <= 5){

        userScore.innerHTML = `Player Score  : ${userCounter++}`

    }
    else{

        userScore.innerHTML = `Player Score : ${userCounter = 5}`
    }
    

}

// Winning conditions display for Computer.

function compScoreBoard(){

    if(compCounter === 5){

        losingDisplay.style.opacity = 1;

        winningDisplay.style.opacity = 0
    
        compScore.innerHTML == `Computer Score : ${compCounter}`

    }
 
    if(compCounter <= 5){

        compScore.innerHTML = `Computer Score : ${compCounter++}`

    }
    else{
        compScore.innerHTML = `Computer Score : ${compCounter = 5}`
    }

}


// Reset button logic and functionality.

resetBtn.addEventListener("click", function(){

    userCounter = 0;

    compCounter = 0;

    compScore.innerHTML = `Computer Score : ${compCounter}`

    userScore.innerHTML = `Player Score : ${userCounter}`

    losingDisplay.style.opacity = 0;

    winningDisplay.style.opacity = 0;

    userAnswer.innerHTML = `<img src="PLAYERS-ICON/pexels-oleksandr-pidvalnyi-6848112.jpg" alt="" class="olex">`
    
    compAnswer.innerHTML = `<img src="PLAYERS-ICON/pexels-borja-lopez-1346154.jpg" alt="" class="borja">`

    main_result.innerHTML = `Pick one of the items below..`
});









