'use strict'

const store = require('../store')

const successMessage = message => {
  $('#video-status').text(message).show()
  $('#video-status').addClass('success')
  $('#video-status').removeClass('failure')

  // clear forms
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#video-status').text(message)
  $('#video-status').addClass('failure')
  $('#video-status').removeClass('success')

  // clear forms
  $('form').trigger('reset')
}

const indexVideosSuccess = responseData => {
  store.videos = responseData.videos
  console.log('responseData is ', responseData)
  console.log('store playlist is ', store.playlistId)
  // const playlist = store.playlist
  // console.log('index games success ', responseData)
  $('#video-index').html('')
  $('#total-videos').text(`Total Videos: ${store.videos.length}`).show()

  store.videos.forEach(function (video) {
    const videosHtml = (`
      <h3>Episode Title: ${video.name}</h3>
      <h4>Episode Number: ${video.episode_number}</h4>
      <h4>Original Air Date: ${video.air_date}</h4>
      <button class="add-vid btn btn-primary" data-video="${video.id}">Add to Playlist</button>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.youtube_id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p>Description: ${video.description}</p>

      <br>
    `)

    $('#video-index').append(videosHtml)
  })
}

// playlist="${playlist.playlist.id}

const indexVideosFail = function () {
  // console.log('Index Games Failed ', error)
  failureMessage('Cannot Load Videos')
}

const showRandomVideoSuccess = responseData => {
  store.video = responseData.video
  console.log('responseData is ', responseData)
  console.log('store video is ', store.video)
  // console.log('index games success ', responseData)
  $('#video-index').html('')
  // $('#total-videos').text(`Total Videos: ${store.videos.length}`).show()

  const videosHtml = (`
      <h3>Episode Title: ${store.video.name}</h3>
      <h4>Episode Number: ${store.video.episode_number}</h4>
      <h4>Original Air Date: ${store.video.air_date}</h4>
      <button id="add-to-playlist" class="btn btn-primary">Add to Playlist</button>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${store.video.youtube_id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p>Description: ${store.video.description}</p>

      <br>
    `)

  $('#video-index').append(videosHtml)
}

const showVideoFail = function () {
  // console.log('Index Games Failed ', error)
  failureMessage('Cannot Load Video')
}

const createPlaylistSuccess = responseData => {
  store.playlist = responseData.playlist

  successMessage('Successfully Created Playlist')
  $('#video-index').html('')
  // $('#total-videos').text(`Total Videos: ${store.videos.length}`).show()

  const videosHtml = (`
      <h3>Playlist: ${store.playlist.title}</h3>
      <button class="add-state btn btn-primary col-mb-3" data-playlist="${store.playlist.id}">Add Episodes</button>
    `)

  $('#video-index').append(videosHtml)
}

const createPlaylistFail = function () {
  // console.log('Index Games Failed ', error)
  failureMessage('Unable to Create Playlist')
}

const viewPlaylistsSuccess = responseData => {
  store.playlists = responseData.playlists
  console.log('responseData is ', responseData)
  $('#show-delete').show()
  $('#video-index').html('')

  store.playlists.forEach(function (playlist) {
    const playlistsHtml = (`
      <h3>Playlist Title: ${playlist.title}</h3>
      <h4>Number of Episodes: ${playlist.videos.length}</h4>
      <button class="change-title btn btn-primary col-mb-3">Change Title</button>
      <button class="add-state btn btn-primary col-mb-3" data-playlist="${playlist.id}">Add Episodes</button>
      <button class="show btn btn-primary col-mb-3" data-playlist="${playlist.id}">Show Episodes</button>


      <br>
    `)

    $('#video-index').append(playlistsHtml)

    store.playlistId = playlist.id
  })
}

const viewPlaylistsFail = function () {
  // console.log('Index Games Failed ', error)
  failureMessage('No Playlists Found')
}

const addVideoToPlaylist = responseData => {

  store.videos = responseData.videos
  store.playlists = responseData.playlists
  console.log('store.videos is ', store.videos)
  console.log('store.playlists is ', store.playlists)
  // if (store.playlist.videos.indexOf(event.target.data('video') === -1) {
  //   successMessage('Added Video To Playlist')
  // }
  successMessage('Added Video To Playlist')
}

const showPlaylistEpisodes = responseData => {
  store.playlist = responseData.playlist

  console.log('store.playlist is ', store.playlist)
  $('#episodes-index').html('')

  $('#total-playlists').text(`Current Playlist: ${store.playlist}`).show()

  if (store.playlist.videos.length === 0) {
    $('#total-playlists').text('Selected Playlist Has No Videos!')
  } else {
    store.playlist.videos.forEach(function (video) {
      const episodeHtml = (`
        <h3>Episode Title: ${video.name}</h3>
        <h4>Episode Number: ${video.episode_number}</h4>
        <h4>Original Air Date: ${video.air_date}</h4>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.youtube_id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>Description: ${video.description}</p>

        <br>
    `)

      $('#episodes-index').html(episodeHtml)
    })
  }
}

const choosePlaylistSuccess = responseData => {
  store.playlists = responseData.playlists
  $('#playlist-index').html('')
  $('#total-playlists').text(`Total Playlists: ${store.playlists.length}`)

  store.playlists.forEach(function (playlist) {
    const playlistsHtml = (`
      <button class="playlist btn btn-primary col-mb-3">${playlist.title}</button>
      <br>
    `)

    $('#playlist-index').append(playlistsHtml)
  })
}

const choosePlaylistFail = function () {
  // console.log('Index Games Failed ', error)
  failureMessage('No Playlists Created Yet')
}

const setDeleteStateSuccess = () => {
  const playlists = store.playlists
  console.log('playlists are ', playlists)
  $('#video-index').html('')

  playlists.forEach(function (playlist) {
    const playlistsHtml = (`
      <h3>Playlist Title: ${playlist.title}</h3>
      <h4>Number of Episodes: ${playlist.videos.length}</h4>
      <button class="delete-playlist btn btn-primary col-mb-3" data-del-playlist="${playlist.id}">Delete This Playlist</button>


      <br>
    `)

    $('#video-index').html(playlistsHtml)
  })
}

const setDeleteStateFail = function () {
  // console.log('Index Games Failed ', error)
  failureMessage('No Playlists To Delete!')
}

const deletePlaylistSuccess = () => {
  const playlists = store.playlists
  successMessage('Successfully deleted playlist')
  // console.log('playlists are ', playlists)
  $('#video-index').html('')

  playlists.forEach(function (playlist) {
    const playlistsHtml = (`
      <h3>Playlist Title: ${playlist.title}</h3>
      <h4>Number of Episodes: ${playlist.videos.length}</h4>
      <button class="delete-playlist btn btn-primary col-mb-3" data-del-playlist="${playlist.id}">Delete This Playlist</button>


      <br>
    `)

    $('#video-index').html(playlistsHtml)
  })
}

const deletePlaylistFail = function () {
  failureMessage('Unable to Delete Playlist')
}

module.exports = {
  viewPlaylistsSuccess,
  viewPlaylistsFail,
  choosePlaylistSuccess,
  choosePlaylistFail,
  indexVideosSuccess,
  indexVideosFail,
  showRandomVideoSuccess,
  showVideoFail,
  createPlaylistSuccess,
  createPlaylistFail,
  showPlaylistEpisodes,
  addVideoToPlaylist,
  setDeleteStateSuccess,
  setDeleteStateFail,
  deletePlaylistSuccess,
  deletePlaylistFail
}
