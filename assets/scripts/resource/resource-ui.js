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
  // console.log('index games success ', responseData)
  $('#video-index').html('')
  $('#total-videos').text(`Total Videos: ${store.videos.length}`).show()

  store.videos.forEach(function (video) {
    const videosHtml = (`
      <h3>Episode Title: ${video.name}</h3>
      <h4>Episode Number: ${video.episode_number}</h4>
      <h4>Original Air Date: ${video.air_date}</h4>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.youtube_id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p>Description: ${video.description}</p>

      <br>
    `)

    $('#video-index').append(videosHtml)
  })
}

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

  // store.video = responseData.video

  // $('#video-index').html('')
  //
  // $('#video-index').html(`
  //     <p>Game ID: ${store.video.episode_number}<p>
  //     <p>Completed: ${responseData.game.over}</p>
  //
  //     <br>
  //   `)
  //
  // $('form').trigger('reset')
}

const showVideoFail = function () {
  // console.log('Index Games Failed ', error)
  failureMessage('Cannot Load Video')
}

const createPlaylistSuccess = responseData => {
  const playlist = responseData.playlist

  successMessage('Successfully Created Playlist')
  $('#video-index').html('')
  // $('#total-videos').text(`Total Videos: ${store.videos.length}`).show()

  const videosHtml = (`
      <h3>Playlist: ${playlist.title}</h3>
    `)

  $('#video-index').append(videosHtml)
}

const createPlaylistFail = function () {
  // console.log('Index Games Failed ', error)
  failureMessage('Unable to Create Playlist')
}

const viewPlaylistsSuccess = responseData => {
  store.playlists = responseData.playlists
  // console.log('index games success ', responseData)
  $('#video-index').html('')

  store.playlists.forEach(function (playlist) {
    const playlistsHtml = (`
      <h3>Playlist Title: ${playlist.title}</h3>
      <h4>Number of Episodes: ${store.playlists.length}</h4>
      <button class="change-title btn btn-primary">Change Title</button>
      <button class="add btn btn-primary">Add Episode</button>
      <button class="remove btn btn-primary">Remove Episode</button>

      <br>
    `)

    $('#video-index').append(playlistsHtml)
  })
}

const viewPlaylistsFail = function () {
  // console.log('Index Games Failed ', error)
  failureMessage('No Playlists Found')
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

// const createPlaylistVideoRel = responseData => {
//
// }

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
  createPlaylistFail
}
