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

module.exports = {
  signUpSuccessful,
  signUpFailure
  // signInSuccessful,
  // signInFailure,
  // changePwSuccess,
  // changePwFailure,
  // signOutSuccess,
  // signOutFailure
}
