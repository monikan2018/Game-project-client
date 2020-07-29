//games/events.js
'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const logic = require('./logic')
const store = require('../store')


const onNewGame = function(){
  onViewAllGames()
  logic.resetVariables()
  console.log(store.gameOver)
  api.createGame()
      .then(ui.newGameSuccess)
      .catch(ui.newGameFailure)
  }

const onClickBox = function(event){
     $('#btnStartGame').text("Restart")
     if (store.gameOver){
       ui.gameOver()
     }else if ($(event.target).text() !==''){
      const box = $(event.target)
      box.className = "animate";
       ui.positionTaken(box)
     }else {
       const index = $(event.target).data('id')
       api.updateGame(index, store.currentPlayer, false)
            .then(data =>{
              const box = $(event.target)
              box.css('background','lightskyblue')
              box.text(store.currentPlayer)
              store.board[index] = store.currentPlayer
              logic.checkboard()
              logic.switchPlayer()
              ui.updateGameSuccess(data)
            })
          .catch(ui.updateGameFailure)
     }
}


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
