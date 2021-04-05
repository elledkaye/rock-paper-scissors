//Odin Project > rock, paper, scissor 
//begin with a function 'computerPlay' 
//computerPlay will randomly return either rock, paper or scissor 
//we will use the 'computerPlay' function to make the computer's play  

//we will create an array variable to store the values rock, paper, scissor 
let optionArr = ['rock', 'paper', 'scissors'];
let playerCount = 0; 
let computeCount =0;
let playerScore = false; 
let computeScore = false;
let button_rock = document.getElementById('btn_rock');
let btn_paper = document.getElementById('btn_paper');
let btn_scissors = document.getElementById('btn_scissors');
let playerSelection = document.querySelector('.btn');
let randomSelection;


//computerPlay function 
computerPlay = () => {
//the computerPlay function will randomly select a choice from the choice array (choiceArr)
//Q1? How do you randomly select a choice from an array
//we will use Math.floor and Math.random  
randomSelection = optionArr[Math.floor(Math.random()* optionArr.length)];
return randomSelection;

};
//Q2? How do we find out which button was clicked? 
//Q3? How do we disable the other two options once we find out which button was clicked?  
//if btn_rock = true then disable the other two 
//if btn_paper = true then disable the other two 
//if btn_scissors = true then disable the other two
//we need a function that plays a single roun of rock, paper, scissors 
//takes 2 parameters - computerSelection, playerSelection; 
//and then return a string that declares the winner
playGame = (selection)=>{  
    if(selection == btn_rock){ 
      getrock(); 
      alert(playerSelection)
    }else if(selection == btn_paper){
      getpaper();
      alert(playerSelection);
   }
   else {selection == btn_scissors
     getscissors();
     alert(playerSelection)
   }
   
   test();
   
   console.log(`ComputerSelection: ` + ' ' + randomSelection + ' ' + `PlayerSelection: ` + ' ' + playerSelection + ' ' + computeScore + ' ' + computeCount +' '+ playerScore);
   console.log(computeCount)
   console.log(playerCount)
   
   }

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


//paper beats rock 
//rock beats scissors 
//scissors beats paper 
//if player selection is paper and computer is rock 
//the player wins 
//if computer selection is paper and player is rock then 
//the computer wins......
//switch statement? 
function test(){
    computerPlay()
      if(playerSelection == randomSelection){
        
        alert('You Tied')
      }else if(playerSelection == 'paper' && randomSelection == 'scissors'){
        computeScore = true;
        alert('you lost sucka')
      } else if(playerSelection == 'scissors' && randomSelection == 'paper'){  
        playerScore = true
        alert('you win')
      }else if(playerSelection == 'rock' && randomSelection == 'paper'){ 
        computeScore = true;
        alert('you lose')
    }else if(playerSelection == 'paper' && randomSelection == 'rock'){ 
      playerScore = true;
      alert ('you wine')
    }else if(playerSelection == 'rock' && randomSelection == 'scissors'){ 
      playerScore = true;
      alert('youv won')
    }else if(playerSelection == 'scissors' && randomSelection == 'rock'){
      computeScore = true; 
      computeCount =+1;
      alert('you lose');
    }else {
    alert('merp')
      }
    addPoints(computeScore, playerScore)
    } 
    
  
  reset = () => {
    if( document.getElementById('reset').onclick = true){
      btn_rock.disabled = false; 
      btn_paper.disabled = false; 
      btn_scissors.disabled = false;
      computeScore = false; 
      playerScore = false;
       } 
       
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


