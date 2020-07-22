'use strict'
const store = require('../store')

const signUpSuccess = function(response){
  $('#message').text("Successful sign-up! Please Sign-in to play")
}
const signUpFailure = function(){
  $('#message').text("Sign-up failed! Not signed-in check credentials")
}
const signInSuccess = function(response){
  $('#message').text('Successful sign-in!')
  console.log(store)
  store.user = response.user
  console.log('store:', store)
  console.log('token: ', store.user.token)
  $('#signInModal').modal('hide')
  $('#btnStartGame').attr('disabled',false)
  $('#btnStartGame').removeClass('disabled').addClass('enabled')
  $('#nav-change-password').removeClass('nav-link disabled').addClass('nav-link')
  $('#nav-sign-out').removeClass('nav-link disabled').addClass('nav-link')
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
  $('#btnStartGame').removeClass('enabled').addClass('disabled')
  $('#nav-change-password').removeClass('nav-link').addClass('nav-link disabled')
  $('#nav-sign-out').removeClass('nav-link').addClass('nav-link disabled')
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
