'use strict'
const store = require('../store')
const config= require('../config')

const signUp = function(formData){
  return $.ajax({
     url: config.apiUrl + '/sign-up',
     method:'POST',
     data:formData
 })
}
const signIn = function(formData){
  return $.ajax({
    url:config.apiUrl + '/sign-in',
    method:'POST',
    data:formData
  })
}
const changePassword = function(formData){
  return $.ajax({
    headers:{
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/change-password',
    method:'PATCH',
    data:formData
  })
}
const signOut =function(){
  return $.ajax({
    headers:{
      Authorization: 'Bearer ' + store.user.token
    },
    url:config.apiUrl + '/sign-out',
    method:'DELETE'
  })
}

module.exports = {
  signUp:signUp,
  signIn:signIn,
  changePassword:changePassword,
  signOut:signOut
}
