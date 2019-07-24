'use strict'

const api = require('./resource-api')
const ui = require('./resource-ui')
const resourceLogic = require('./resource-logic')
// const store = require('../store')
const getFormFields = require('./../../../lib/get-form-fields')

const onViewAvailableVideos = data => {
  // const videoUser = store.user
  //  const games = store.games
  event.preventDefault()

  $('#video-status').show()
  // $('#hide-videos').show()
  // $('#show-video').show()
  $('#total-videos').show()

  api.indexVideos()
    .then(ui.indexVideosSuccess)
    .catch(ui.indexVideosFail)
}

const onRandomVideo = event => {
  event.preventDefault()

  api.showVideo(resourceLogic.getRandomNumber(1, 26))
    .then(ui.showRandomVideoSuccess)
    .catch(ui.showVideoFail)
}

const onCreatePlaylist = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  console.log('This is the form data ', formData.playlist)

  api.createPlaylist(formData)
    .then(ui.createPlaylistSuccess)
    .catch(ui.createPlaylistFail)
}

module.exports = {
  onCreatePlaylist,
  // onUpdateGame,
  onViewAvailableVideos,
  onRandomVideo

}
