//auth/events.js

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')


const onSignUp = function(event){
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
       .then(ui.signUpSuccess)
       .catch(ui.signUpFailure)
 $('#signUpModal').modal('hide')
}
const onSignIn = function(event){
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
       .then(ui.signInSuccess)
       .catch(ui.signInFailure)
$('#signInModal').modal('hide')
}
const onChangePassword = function(event){
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
       .then(ui.pwChangeSuccess)
       .catch(ui.pwChangeFailure)
$('#changePasswordModal').modal('hide')
}
const onSignOut = function(event){
  event.preventDefault()
  const form=event.taqrget
  //const formData = getFormFields(form)
  api.signOut()
     .then(ui.signOutSuccess)
     .catch(ui.signOutFailure)
}

module.exports = {
    onSignUp: onSignUp,
    onSignIn: onSignIn,
    onChangePassword: onChangePassword,
    onSignOut: onSignOut

}
