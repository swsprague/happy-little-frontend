'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const resUi = require('../resource/resource-ui')

const onSignUp = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccessful)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccessful)
    .then(resUi.viewPlaylistsSuccess)
    .catch(ui.signInFailure)
}

const onQuickSignIn = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.quickSignIn(formData)
    .then(ui.signInSuccessful)
    .catch(ui.signInFailure)
}

const onChangePw = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.changePw(formData)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFailure)
}

const onSignOut = event => {
  event.preventDefault()
  // no form data required for DELETE events
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onQuickSignIn,
  onChangePw,
  onSignOut
}
