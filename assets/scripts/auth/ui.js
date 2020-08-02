'use strict'
const store = require('../store')
const gameEvents = require('../game/events')


const signUpSuccess = function(response){
  $('.box').disabled = true
  $('#message').text("")
  $('#message').text("Successful sign-up! Please Sign-in to play")
}
const signUpFailure = function(){
  $('#message').text("Incorrect Username or Password.")

}
const signInSuccess = function(response){
  $('#message').text('Successful sign-in!')
  $('.box').disabled = true
  store.user = response.user
  console.log('store:', store)
  //player can see the number of games played
  gameEvents.onViewAllGames()
  $('#signInModal').modal('hide')
  //To enable bar that has start button and games played by the user
  $('#startBar').removeClass('disabled',false).addClass('enabled')
  //To enable the start button
 //$('#btnStartGame').attr('disabled',false)
//Disable sign-up and sign-in and enable password-change and sign out
  $('#btnStartGame').removeClass('disabled').addClass('enabled')
  $('#nav-change-password').removeClass('nav-link disabled').addClass('nav-link')
  $('#nav-sign-out').removeClass('nav-link disabled').addClass('nav-link')
  $('#nav-sign-in').removeClass('nav-link ').addClass('nav-link disabled')
  $('#nav-sign-up').removeClass('nav-link').addClass('nav-link disabled')
  //Access to play game after you are signed-in

}
const signInFailure = function(){
  $('#message').text("Sign-in failed!")
}
const pwChangeSuccess = function(response){
  $('#message').text("Password changed!")
}

const pwChangeFailure = function(){
  $('#message').text("Password change failed!")
}

const signOutSuccess = function(){
  $('#signOutModal').modal('hide')
  $('#message').text("Signed you out!")
//  $('#btnStartGame').attr('disabled',true)
  //Disable the start bar
  $('#startBar').removeClass('enabled').addClass('disabled')
  //Enable sign-up and sign-in and disable password-change and sign out
  $('#btnStartGame').removeClass('enabled').addClass('disabled')
  $('#nav-change-password').removeClass('nav-link').addClass('nav-link disabled')
  $('#nav-sign-out').removeClass('nav-link').addClass('nav-link disabled')
  $('#nav-sign-in').removeClass('nav-link disabled').addClass('nav-link ')
  $('#nav-sign-up').removeClass('nav-link disabled').addClass('nav-link')
  //clear the screen
  $('.box').text('')
  $('.box').css('background','white')
}
const signOutFailure = function(){
  $('#signOutModal').modal('hide')
  $('#message').text("Sign out Failed")

}


module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure:signUpFailure,
  signInSuccess:signInSuccess,
  signInFailure:signInFailure,
  pwChangeSuccess:pwChangeSuccess,
  pwChangeFailure:pwChangeFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure
}
