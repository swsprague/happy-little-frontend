'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const resEvents = require('./resource/resource-events')

$(() => {
  // your JS code goes here
  $('#show-sign-up').on('click', function () {
    $('#sign-up').show()
    $('#show-sign-up').hide()
  })
  $('#sign-up').on('submit', authEvents.onSignUp).hide()
  $('#show-sign-in').on('click', function () {
    $('#sign-in').show()
    $('#show-sign-in').hide()
  })
  $('#sign-in').on('submit', authEvents.onSignIn).hide()
  $('#quick').on('click', authEvents.onQuickSignIn)
  $('#show-change-pw').on('click', function () {
    $('#change-pw').show()
    $('#show-change-pw').hide()
  }).hide()
  $('#change-pw').on('submit', authEvents.onChangePw).hide()
  $('#sign-out').on('click', authEvents.onSignOut).hide()
  $('#show-videos').on('click', resEvents.onViewAvailableVideos)
  $('#ross-imizer').on('click', resEvents.onRandomVideo)
})
