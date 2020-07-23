
const store = require ('../store')
const newGameSuccess = function(response){
  $('#message').text("Let's play !")
}

const newGameFailure = function(error){
  $('#message').text("could not create new game")
}

const gameOver = function(){
  $('#message').text("Click on the 'start' to start a new game!")
}

const Taken = function(){

  if(store.winner === "true"){
    $('#message').text(`Congratulations ${store.currentPlayer} ! you are the winner.`)
  }else if(store.tie === "true"){
      $('#message').text("It's a tie!")
  }else{
      $('#message').text("You lost the game!")
 }
}
const positionTaken = function(){
$('#message').text("Pick another location!")
box.css('animation','spotTaken 3s infinite')
}

const onUpdateSuccess = function(data){


}

const onUpdateFailure = function(){


}

const onIndexSuccess = function(){}
const onIndexFailure = function(){}

module.exports ={
  gameOver,
  positionTaken,
  onUpdateFailure,
  onUpdateSuccess,
  newGameFailure,
  newGameSuccess,
  onIndexSuccess,
  onIndexFailure
}
