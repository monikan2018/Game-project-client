'use strict'

const store = require ('../store')

const newGameSuccess = function(response){
  $('#message').text("New Game Started !")
  store.game = response.game
  store.game._id = response.game._id
   console.log('game',store.game)
    console.log('gameID',store.game._id)
}

const newGameFailure = function(error){
  $('#message').text("could not create new game")
}

const gameOver = function(){
  $('#message').text(`${store.gameStatus}`)
  $('#btnStartGame').text("Restart")
  $('.box').disabled = true
}

const positionTaken = function(){
$('#message.msgheading').text("Pick another location!").css('background','#F08080')


}

const updateGameSuccess = function(response){
  store.game = response.game
  store.game._id = response.game._id
  console.log('store:',store.game)
  if(store.gameOver){
     gameOver()
  }

}

const updateGameFailure = function(){
$('#message').text("Update Failure!")
}

const indexSuccess = function(response){
  $('#gamesPlayed').text(` You have played  ${response.games.length} games!`)
}
const indexFailure = function(){}

module.exports ={
  gameOver,
  positionTaken,
  updateGameFailure,
  updateGameSuccess,
  newGameFailure,
  newGameSuccess,
  indexSuccess,
  indexFailure
}
