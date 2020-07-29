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
  $('#message').text(`${store.gameStatus} Start a new game!`)
  $('#btnStartGame').text("Restart")
  $('.box').disabled = true
}

const positionTaken = function(){
$('#message').text("Pick another location!")
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
    console.log(response)
  const gamesUserPlayed= response.games.length

  store.gamespl= response.games.length
  $('#gamesPlayed').text(gamesUserPlayed)
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
