//Odin Project > rock, paper, scissor 
//begin with a function 'computerPlay' 
//computerPlay will randomly return either rock, paper or scissor 
//we will use the 'computerPlay' function to make the computer's play  

//we will create an array variable to store the values rock, paper, scissor 
let choiceArr = ['rock', 'paper', 'scissor'];
let button_rock = document.getElementById('btn_rock');
let btn_paper = document.getElementById('btn_paper');
let btn_scissors = document.getElementById('btn_scissors');
let check_rock = document.getElementById('chk_rock');

//computerPlay function 
computerPlay = () => {
//the computerPlay function will randomly select a choice from the choice array (choiceArr)
//Q1? How do you randomly select a choice from an array
//we will use Math.floor and Math.random  
let computerSelection = '';
computerSelection = choiceArr[Math.floor(Math.random() *choiceArr.length)];
return computerSelection;

};

//next we need a function that plays a single round of rock, paper, scissors 
//the function should take two parameters - playerSelection and computerSelection  

//we need a function that determines which button the user clicked - rock, paper, scissor 
//depending on the button that was selected, that value will be the playersSelection   
//we have (3) buttons in html - btn_rock, btn_paper, btn_scissor 
//if btn_rock was clicked disable the other (2) buttons, else if btn_paper was clicked disable the other two options 


//getSelection 
function getSelection(){
//Q2? How do we find out which button was clicked? 
//Q3? How do we disable the other two options once we find out which button was clicked?  
//if btn_rock = true then disable the other two 
//if btn_paper = true then disable the other two 
//if btn_scissors = true then disable the other two

if(check_rock.checked = true){
    alert('test')
}

}

//btn_rock.onclick = function(){
  //  console.log('yes bitch')
  //return true 

//}
//btn_paper.onclick = function(){
 //   console.log('fuck yes')
//}
//btn_scissors.onclick = function(){
  //  alert('fuck now what')
//}
