'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const store =require('./store')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  if(store.gamePlay === false){
    $('.box').hide()
 }else{
    $('.box').show()
 }
 $('#sign-up').on('submit',authEvents.onSignUp)
 $('#sign-in').on('submit',authEvents.onSignIn)
 $('#change-password').on('submit',authEvents.onChangePassword)
 $('#sign-out').on('click',authEvents.onSignOut)
 $('#btnStartGame').on('click',gameEvents.onNewGame)
 $('.box').on('click',gameEvents.onClickBox)
})
