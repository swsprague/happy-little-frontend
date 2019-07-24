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

  api.createPlaylist(formData)
    .then(ui.createPlaylistSuccess)
    .catch(ui.createPlaylistFail)
}

const onViewPlaylists = data => {
  event.preventDefault()

  // const form = event.target
  // const formData = getFormFields(form)

  api.indexPlaylists()
    .then(ui.viewPlaylistsSuccess)
    .catch(ui.viewPlaylistsFail)
}

const onChoosePlaylist = data => {
  event.preventDefault()

  // const form = event.target
  // const formData = getFormFields(form)

  api.indexPlaylists()
    .then(ui.choosePlaylistSuccess)
    .catch(ui.choosePlaylistFail)
}

module.exports = {
  onCreatePlaylist,
  onChoosePlaylist,
  onViewPlaylists,
  // onUpdateGame,
  onViewAvailableVideos,
  onRandomVideo

}
