'use strict'
 const store = require ('../store')

  let win_Cond1 = ['1','2','3']
  let win_Cond2 = ['4','5','6']
  let win_Cond3 = ['7','8','9']
  let win_Cond4 = ['1','5','9']
  let win_Cond5 = ['3','5','7']
  let win_Cond6 = ['1','4','7']
  let win_Cond7 = ['2','5','8']
  let win_Cond8 = ['3','6','9']


//initialize
const initialize = function(event){
  store.currentPlayer = 'X'
  store.gameOver = ''
  store.board=[]
  store.player='O',
  store.winner='',
  store.looser='',
  store.tie='false'
  $('.box').on()
}

//check winning conditions
const checkboard = function(){
  if(store.board.includes(win_Cond1)||
     store.board.includes(win_Cond2)||
     store.board.includes(win_Cond3)||
     store.board.includes(win_Cond4)||
     store.board.includes(win_Cond5)||
     store.board.includes(win_Cond6)||
     store.board.includes(win_Cond7)||
     store.board.includes(win_Cond8)){
       store.gameOver = 'over'
       store.winner = currentPlayer
       store.looser = player;
  }
  //check for tie
  for(let i=0; i < 9; i++){
    if(store.board[i] !== ''){
           store.gameOver = 'over'
           store.tie = 'true'
    }
  }
}

//switch player
const switchPlayer = function(){
    const box = $(event.target)
    box.css('background','lightskyblue'.text(currentPlayer))
    currentPlayer = currentPlayer === 'X'?'Y':'X'
}

//create the array board in store
//create new game
//game 1

//loop the game to let player play while i > 9
//set the player to current player and and assign the value of X
    //let the user clicks on the box
    //store the position into array
    //store the value
//else
//check if the array if full
  //yes: pass the value of true for over
  //no: value of over is 'false'
//when the user clicks on the box select the box position
    //if the position is taken
        //yes: make the background color go red when clicked
              //let user click on the right box
       //no: check if the player for win/loose/tie condition
       //store the position into the array
       //Store the value
