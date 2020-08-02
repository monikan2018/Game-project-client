'use strict'
 const store = require ('../store')


  let win_cond = [
    ['0','1','2'],
    ['3','4','5'],
    ['6','7','8'],
    ['0','4','8'],
    ['2','4','6'],
    ['0','3','6'],
    ['1','4','7'],
    ['2','5','8']];


//initialize
const resetVariables = function(){
   $('.box').disabled = false
   $('.box').text('')
   $('.box').css('background-color','white')
   store.currentPlayer = 'X'
   store.gameOver = false
   store.gameStatus =''
   store.board=["","","","","","","","",""]
}

const checkWinConditions = function(){
  for(let i =0; i <=7 ; i++){
    //find the length for inner array
    const innerArray = win_cond[i];
    let a = store.board[innerArray[0]];
    let b = store.board[innerArray[1]];
    let c = store.board[innerArray[2]];
    if(a === '' || b=== '' || c === ''){
      continue;
    }else if((a === b )&& (b === c)){
      return true;
    }
  }
}

//check winning conditions
const checkboard = function(){
  store.tieStatus = !store.board.includes('')
  if(checkWinConditions() === true){
    store.gameStatus = `Hey '${store.currentPlayer}', you are the winner!`
    store.gameOver = true
  }else if(store.tieStatus === true){
    //tie condition check
      store.gameStatus = 'It is a tie! '
      store.gameOver = true
  }
}

//switch player
const switchPlayer = function(){
    let currentPlayer = store.currentPlayer
    store.currentPlayer = currentPlayer === 'X'?'O':'X'
    //console.log(`sp: ${store.currentPlayer}`)
    $('.msgheading').css('background','#f5f5db')
    $('#message').text(`' ${store.currentPlayer} ' your turn to play.`)
}


module.exports = {
  resetVariables,
  checkboard,
  checkWinConditions,
  switchPlayer
}
