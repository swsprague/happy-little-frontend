'use strict'

const api = require('./resource-api')
const ui = require('./resource-ui')
const resourceLogic = require('./resource-logic')
const store = require('../store')
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

const onShowPlaylistEpisodes = data => {
  event.preventDefault()
  const target = event.target
  console.log('target is ', target)
  const currentPlaylist = $(target).data('playlist')

  api.showPlaylist(currentPlaylist)
    .then(ui.showPlaylistEpisodesSuccess)
    .catch(ui.showPlaylistEpisodesFail)
}

// const onShowPlaylistLength = data => {
//   event.preventDefault()
//   const target = event.target
//   console.log('target is ', target)
//   const currentPlaylist = $(target).data('playlist')
//
//   api.showPlaylist(currentPlaylist)
//     .then(ui.showPlaylistLength)
//     .catch(console.error)
// }

const onAddVideoToPlaylist = data => {
  event.preventDefault()
  const target = event.target
  console.log('target is ', target)
  console.log('store.playlist.id is ', store.playlist)
  const currentPlaylist = store.playlist.id
  const currentVideo = $(target).data('video')
  $('#current-playlist').text(`Currently Adding To: ${store.playlist.title}`)

  // console.log('cp is ', currentPlaylist)

  api.addVideoToPlaylist(currentPlaylist, currentVideo)
    .then(ui.addVideoToPlaylistSuccess)
    // .then(api.onShowPlaylistLength(currentPlaylist))
    // .then(ui.showPlaylistLength)
    .catch(ui.addVideoToPlaylistFail)
}

const onAddPlaylistToVideo = data => {
  event.preventDefault()
  const target = event.target
  const playlistTitle = $(target).data('title')
  $('#current-playlist').text(`Added To: ${playlistTitle}`).fadeIn(1000)
  console.log('target is ', target)
  console.log('store.video.id is ', store.video.id)
  const currentPlaylist = $(target).data('playlist')
  const currentVideo = store.video.id
  $('#current-playlist').text(`Added To: ${playlistTitle}`).fadeOut(3000)

  // console.log('cp is ', currentPlaylist)

  api.addVideoToPlaylist(currentPlaylist, currentVideo)
    .then(ui.addVideoToPlaylistSuccess)
    // .then(api.onShowPlaylistLength(currentPlaylist))
    // .then(ui.showPlaylistLength)
    .catch(ui.addVideoToPlaylistFail)
}

const onChoosePlaylist = data => {
  event.preventDefault()

  // const form = event.target
  // const formData = getFormFields(form)

  api.indexPlaylists()
    .then(ui.choosePlaylistSuccess)
    .catch(ui.choosePlaylistFail)
}

const onSetAddState = data => {
  event.preventDefault()

  api.indexVideos()
    .then(ui.addStateIndexVideosSuccess)
    .catch(ui.addStateIndexVideosFail)
}

const onSetChangeState = data => {
  event.preventDefault()
  const target = event.target
  console.log('target is ', target)
  const currentPlaylist = $(target).data('change')

  api.showPlaylist(currentPlaylist)
    .then(ui.setChangeStateSuccess)
    .catch(ui.setChangeStateFail)
}

const onChangePlaylistTitle = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  console.log('form is ', form)
  // console.log('form is ', form)
  console.log('formData is ', formData)
  console.log('store.playlist is ', store.playlist)
  const currentPlaylist = $(form).data('conf-playlist')
  console.log('currentPlaylist is ', currentPlaylist)
  api.updatePlaylist(currentPlaylist, formData)
    .then(ui.changePlaylistTitleSuccess)
    .catch(ui.changePlaylistTitleFail)
}

const onSetDeleteState = data => {
  event.preventDefault()

  api.indexPlaylists()
    .then(ui.setDeleteStateSuccess)
    .catch(ui.setDeleteStateFail)
}

const onDeletePlaylist = data => {
  event.preventDefault()
  const target = event.target
  console.log('target is ', target)
  const currentPlaylist = $(target).data('del-playlist')

  api.deletePlaylist(currentPlaylist)
    .then(ui.deletePlaylistSuccess)
    .catch(ui.deletePlaylistFail)
}

module.exports = {
  onCreatePlaylist,
  onChoosePlaylist,
  onViewPlaylists,
  onShowPlaylistEpisodes,
  onViewAvailableVideos,
  onRandomVideo,
  onAddVideoToPlaylist,
  onSetAddState,
  onSetDeleteState,
  onDeletePlaylist,
  onAddPlaylistToVideo,
  onSetChangeState,
  onChangePlaylistTitle
  // onShowPlaylistLength

}
