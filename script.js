//Odin Project > rock, paper, scissor 

//Step1
//begin with a function 'computerPlay' 
//computerPlay will randomly return either rock, paper or scissor 
//we will use the 'computerPlay' function to make the computer's play  
//we will create an array variable to store the values rock, paper, scissor 

//the computerPlay function will randomly select a choice from the choice array (choiceArr)
//Q1? How do you randomly select a choice from an array
//we will use Math.floor and Math.random  

//Q2? How do we find out which button was clicked? 
//Q3? How do we disable the other two options once we find out which button was clicked?  
//if btn_rock = true then disable the other two 
//if btn_paper = true then disable the other two 
//if btn_scissors = true then disable the other two

//Step2
//we need a function that plays a single roun of rock, paper, scissors 
//takes 2 parameters - computerSelection, playerSelection; 
//and then return a string that declares the winner

//when the user clicks a button that's when the game begins 
//when the user clicks one button the other (2) become disabled and the game runs 
//Q5?: how do I want the user to renable the buttons and proceed to next round 
//when round# is over, a prompt could display asking the user to go to next round

//Step3
//we need a new function called game() 
//need to use the previous function inside of this one to play a (5) round gamee
//need to keep score and report a winner or loser (or both) at the end 


//paper beats rock 
//rock beats scissors 
//scissors beats paper 
//if player selection is paper and computer is rock 
//the player wins 
//if computer selection is paper and player is rock then 
//the computer wins etc..

// getrock = () =>{ 
   // if(e.target.id == 'btn_rock'){
     // alert('match');
      //playerSelection = e.target.id;
      //console.log(e.target.id);
      //return playerSelection;
   // }
  //}; 

  /* getpaper = (e) => {
  if(e.target.id == 'btn_paper'){
   playerSelection = 'paper';
   console.log(e.target.id)
 };
  return(playerSelection);
};

getscissors = () =>{
if(btn_scissors.onclick = true){
  playerSelection = 'scissors'
}
  return(playerSelection);
};*/
let options = ['rock', 'paper', 'scissors'];
let roundOutput = document.getElementById("roundNum");
let playerOutput = document.getElementById("playerOutput");
let compOutput = document.getElementById("compOutput");
let playerCount = 0; 
let computeCount =0;
let playerScore = false; 
let computeScore = false;
let player_btn = document.querySelectorAll(".playerBtn");
let btn_rock = document.getElementById("btn_rock");
let btn_paper = document.getElementById("btn_paper");
let btn_scissors = document.getElementById("btn_scissors");
let randomSelection;
let playerSelection;
let round = 0; 
let maxRound = 5; 


computerPlay = () => {
randomSelection = options[Math.floor(Math.random()* options.length)];
return randomSelection;
};


  let rock = document.querySelector("#btn_rock");
  let paper = document.querySelector("#btn_paper");
  let scissors = document.querySelector("#btn_scissors");
 
  playGame = (playerSelection)=>{  
    round++
    let player_Score = document.getElementById("player_Score");
    let comp_Score = document.getElementById("comp_Score");
    let player_selection = playerSelection;
    game(); 
    test(player_selection);
    endGame();
    compOutput.innerHTML = randomSelection;
    comp_Score.innerHTML = computeCount;
    player_Score.innerHTML = playerCount;
    playerOutput.innerHTML = playerSelection; 
    };

    rock.addEventListener("click", ()=>{
      playGame("rock");
    });
    paper.addEventListener("click", ()=>{
      playGame("paper");
    });
    scissors.addEventListener("click", ()=>{
      playGame("scissors");
    });
 
test = (player) =>{
    computerPlay()
      if(player == randomSelection){
        alert('You Tied')
      }else if(player == "paper" && randomSelection == "scissors"){
        computeScore = true;
        computeCount++
        alert('You lose! Scissors beats Paper!')
      } else if(player == "scissors" && randomSelection == "paper"){  
        playerScore = true;
        playerCount++;
        alert('You win! Scissors beats Paper!')
      }else if(player == "rock" && randomSelection == "paper"){
        computeScore = true;
        computeCount++;
        alert('You lose! Paper beats Rock!')
    }else if(player == "paper" && randomSelection == "rock"){ 
      playerScore = true;
      playerCount++
      alert ('You win! Paper beats Rock!')
    }else if(player == "rock" && randomSelection == "scissors"){ 
      playerScore = true;
      playerCount++;
      alert('You win! Rock beats Scissors!')
    }else if(player == "scissors" && randomSelection == "rock"){
      computeScore = true; 
      computeCount++;
      alert('You lose! Rock beats Scissors!');
    }else {
    alert('merp')
      }
    } 
  
  reset = () => {
      playerSelection = document.querySelector(".btn");
      btn_rock.disabled = false; 
      btn_paper.disabled = false; 
      btn_scissors.disabled = false;
       }; 
 

       endGame =()=>{
        if(round == maxRound){
          btn_rock.disabled = true; 
          btn_paper.disabled = true; 
          btn_scissors.disabled = true;
          addpoints();
        } 
       
      }

      game = () =>{
        if(round <= maxRound ){
          alert("Round" + "" + round); 
        }else if(round == maxRound){
          alert("Last Round");
        }else{
          alert("End of game!")
          btn_rock.disabled = true; 
          btn_paper.disabled = true; 
          btn_scissors.disabled = true;
        };
        return roundOutput.innerHTML = "Round:" + round; 
        } 

        function addpoints(){
          if (computeCount < playerCount){
            alert(`you win, comp loses`)
          }else if(playerCount < computeCount){
            alert(`you lose bitch, comp wins`)
          }else 
         alert(`tie`)

        }

