'use strict'
const store = require('../store')


const signUpSuccess = function(response){
  $('#message').text("")
  $('#message').text("Successful sign-up! Please Sign-in to play")
}
const signUpFailure = function(){
  $('#message').text("Incorrect Username or Password.")

}
const signInSuccess = function(response){
  $('#message').text('Successful sign-in!')
  console.log(store)
  store.user = response.user
  console.log('store:', store)
  console.log('token: ', store.user.token)
  $('#signInModal').modal('hide')
  //To enable the start button
 $('#btnStartGame').attr('disabled',false)
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
  $('#message').text("Signed you out!")
  $('#btnStartGame').attr('disabled',true)
  //Enable sign-up and sign-in and disable password-change and sign out
  $('#btnStartGame').removeClass('enabled').addClass('disabled')
  $('#nav-change-password').removeClass('nav-link').addClass('nav-link disabled')
  $('#nav-sign-out').removeClass('nav-link').addClass('nav-link disabled')
  $('#nav-sign-in').removeClass('nav-link disabled').addClass('nav-link ')
  $('#nav-sign-up').removeClass('nav-link disabled').addClass('nav-link')
  $('#btnStartGame').attr('disabled',true)
}
const signOutFailure = function(){
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
  signOutFailure:signUpFailure
}
