'use strict'

const store = require('../store')

const successMessage = message => {
  $('#message').text(message).show().fadeOut(4000)
  $('#message').addClass('success')
  $('#message').removeClass('failure')

  // clear forms
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#message').text(message).show()
  $('#message').addClass('failure')
  $('#message').removeClass('success')

  // clear forms
  $('form').trigger('reset')
}

const signUpSuccessful = () => {
  successMessage('You Signed Up Successfully - Please Sign In To Play!')
  $('#sign-up').hide()
}

const signUpFailure = () => {
  failureMessage('Sign Up failure :(')
}

const signInSuccessful = responseData => {
  successMessage('You Signed In Successfully!')

  store.user = responseData.user
  // keep track of user so we have token for api
  // we use store so we can access the token in any file.
  $('#show-change-pw').show()
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#show-sign-up').hide()
}

const signInFailure = () => {
  failureMessage('Sign In Failed, Wrong Email Or Password :(')
}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure
  // changePwSuccess,
  // changePwFailure,
  // signOutSuccess,
  // signOutFailure
}
