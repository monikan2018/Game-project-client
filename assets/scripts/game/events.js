//games/events.js
'use strict'

//To create variables for the modules
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const logic = require('./logic')
const store = require('../store')

//To create new game
const onNewGame = function(){
  //view games played
  onViewAllGames()
  //reset all the variables
  logic.resetVariables()
  console.log(store.gameOver)
  //create the new game
  api.createGame()
      .then(ui.newGameSuccess)//if game is created
      .catch(ui.newGameFailure)//if game does not get created
  }

//To play game when user clicks on the box
const onClickBox = function(event){
     if (store.gameOver){
       ui.gameOver()
       //if the position is already taken
     }else if ($(event.target).text() !==''){
        ui.positionTaken()
     }else {
       //update the api with the  current box clicked
        const index = $(event.target).data('id')
        api.updateGame(index, store.currentPlayer, false)
              .then(data =>{
                const box = $(event.target)
                //change the color of the box blue
                box.css('background','lightskyblue')
                //display the current player on board
                box.text(store.currentPlayer)
                //store the current player
                store.board[index] = store.currentPlayer
                //check for win/loose/tie conditions
                logic.checkboard()
                //switch player
                logic.switchPlayer()
                //send data and update
                ui.updateGameSuccess(data)
              })
              //show error if update fails
             .catch(ui.updateGameFailure)
       }
 }

//View games played by the uer
const onViewAllGames = function(event){
  //make API call to get all of the games played by the user
  console.log('Reaching here')
  api.index()
     .then(ui.indexSuccess)//pass the data if successful
     .catch(ui.indexFailure)//show an error
}


module.exports = {
  onViewAllGames,
  onNewGame,
  onClickBox
}
