//Odin Project > rock, paper, scissor 
//begin with a function 'computerPlay' 
//computerPlay will randomly return either rock, paper or scissor 
//we will use the 'computerPlay' function to make the computer's play  
//we will create an array variable to store the values rock, paper, scissor 


//Q2? How do we find out which button was clicked? 
//Q3? How do we disable the other two options once we find out which button was clicked?  
//if btn_rock = true then disable the other two 
//if btn_paper = true then disable the other two 
//if btn_scissors = true then disable the other two
//we need a function that plays a single roun of rock, paper, scissors 
//takes 2 parameters - computerSelection, playerSelection; 
//and then return a string that declares the winner

//if user clicks ok 
//we need to jump out of the function so the user can select a new option 
//Q4?: How do we do that....

let optionArr = ['rock', 'paper', 'scissors'];
let roundOutput = document.getElementById('roundNum');
let playerOutput = document.getElementById('playerOutput');
let compOutput = document.getElementById('compOutput');
let playerCount = 0; 
let computeCount =0;
let playerScore = false; 
let computeScore = false;
let btn_rock = document.getElementById('btn_rock').disabled = false;
let btn_paper = document.getElementById('btn_paper').disabled=false;
let btn_scissors = document.getElementById('btn_scissors').disabled=false;
let playerSelection = document.querySelector('button');
let button = document.querySelector('button');
let randomSelection;
let round = 1; 
let maxRound = 3 ; 

function testbtn(){
  if (button = btn_rock.onclick) {
    alert('fuck')

  }
}
//computerPlay function 
computerPlay = () => {
//the computerPlay function will randomly select a choice from the choice array (choiceArr)
//Q1? How do you randomly select a choice from an array
//we will use Math.floor and Math.random  
randomSelection = optionArr[Math.floor(Math.random()* optionArr.length)];
return randomSelection;

};

//(3) sub functions 
getrock = () =>{ 
  if(btn_rock.onclick = true){
    alert('rock clicked'); 
    btn_paper.disabled = true; 
    btn_scissors.disabled = true;
    playerSelection = 'rock';
  } 
return (playerSelection);
}; 

getpaper = () => {
  if(btn_paper.onclick = true){
    alert('paper clicked');
    console.log('paper');
    btn_rock.disabled = true; 
    btn_scissors.disabled = true;
    playerSelection = 'paper';
  };
  return(playerSelection);
};

getscissors = () =>{
if(btn_scissors.onlcik = true){
  alert('scissors been clicked');
  console.log('scissors');
  btn_rock.disabled = true; 
  btn_paper.disabled = true; 
  playerSelection = 'scissors'
}
  return(playerSelection);
}; 
playGame = (selection)=>{  
   game();

    if(selection == btn_rock){ 
      getrock(); 
    }else if(selection == btn_paper){
      getpaper();
   }
   else {selection == btn_scissors
     getscissors();
   }

   test();
   console.log(`ComputerSelection: ` + ' ' + randomSelection + ' ' + `PlayerSelection: ` + ' ' + playerSelection + ' ' + computeScore + ' ' + computeCount +' '+ playerScore);
   console.log(computeCount);
   console.log(playerCount);
   compOutput.innerHTML = randomSelection;
   playerOutput.innerHTML = playerSelection; 
   roundOutput.innerHTML = "Round" + round; 
   round++; 
   console.log(round)
   reset();
   
   }

//we need a new function called game() 
//need to use the previous function inside of this one to play a (5) round gamee
//need to keep score and report a winner or loser (or both) at the end 

game = () =>{
//when the user clicks a button that's when the game begins 
//when the user clicks one button the other (2) become disabled and the game runs 
//Q5?: how do I want the user to renable the buttons and proceed to next round 
//when round# is over, a prompt could display asking the user to go to next round
if(round <= maxRound){
  alert("Round" + "" + round); 
}else{
  alert("End of game!")
  btn_rock.disabled = true; 
  btn_paper.disabled = true; 
  btn_scissors.disabled = true;
};
} 

endGame =()=>{
  
}
   
//paper beats rock 
//rock beats scissors 
//scissors beats paper 
//if player selection is paper and computer is rock 
//the player wins 
//if computer selection is paper and player is rock then 
//the computer wins etc..
function test(){
    computerPlay()
      if(playerSelection == randomSelection){
        alert('You Tied')
      }else if(playerSelection == 'paper' && randomSelection == 'scissors'){
        computeScore = true;
        computeCount++
        alert('You lose! Scissors beats Paper!')
      } else if(playerSelection == 'scissors' && randomSelection == 'paper'){  
        playerScore = true;
        playerCount++;
        alert('You win! Scissors beats Paper!')
      }else if(playerSelection == 'rock' && randomSelection == 'paper'){
        computeScore = true;
        computeCount++;
        alert('You lose! Paper beats Rock!')
    }else if(playerSelection == 'paper' && randomSelection == 'rock'){ 
      playerScore = true;
      playerCount++
      alert ('You win! Paper beats Rock!')
    }else if(playerSelection == 'rock' && randomSelection == 'scissors'){ 
      playerScore = true;
      playerCount++;
      alert('You win! Rock beats Scissors!')
    }else if(playerSelection == 'scissors' && randomSelection == 'rock'){
      computeScore = true; 
      computeCount++;
      alert('You lose! Rock beats Scissors!');
    }else {
    alert('merp')
      }
    addPoints(computeScore, playerScore)
    } 
  
  reset = () => {
      playerSelection = document.querySelector('.btn');
      btn_rock.disabled = false; 
      btn_paper.disabled = false; 
      btn_scissors.disabled = false;
      

       }; 
   //next we need a function that plays a single round of rock, paper, scissors 
//the function should take two parameters - playerSelection and computerSelection  


//if playerScore = true, then  a point get's added to playerCount
//if computeScore = true, then a point get's added to computerScore 
//if tied then 0 points to each 
addPoints = (a, b) => {
 

    //do while loop?
    //for loop?
    //for player score to get incremented player score must be true 
    //otherwise if computer score is true and player score is false 
    //then computer score gets incremented
   console.log(a, b)
}


