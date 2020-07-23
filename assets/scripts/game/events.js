//games/events.js
'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const logic = require('./logic')
const store = require('../store')


const onNewGame = function(event){
  logic.initialize
  api.createGame()
      .then(ui.newGameSuccess)
      .catch(ui.newGameFailure)
  }

const onClickBox = function(event){
  const box = $(event.target)
     if (store.gameOver){
       ui.gameOver()
     }else if($(event.target).text() !==''){
       ui.positionTaken()
     }else {
       const index = $(event.target).data('_id')
       api.updateGame(index, store.currentPlayer, false)
            .then(data  =>{
              //$(event.target).text(store.currentPlayer)
              $store.board[index] =store.currentPlayer
              logic.checkboard()
              logic.switchPlayer()
              ui.onUpdateSuccess
            })
          .catch(ui.onUpdateFailure)
     }
}


const onViewAllGames = function(event){
  //make API call to get all of the games played by the user
  api.index()
     .then(ui.onIndexSuccess)//pass the data if successful
     .catch(ui.onIndexFailure)//show an error
}


module.exports = {
  onViewAllGames,
  onNewGame,
  onClickBox
}
