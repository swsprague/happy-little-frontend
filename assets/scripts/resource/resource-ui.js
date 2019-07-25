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
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.youtube_id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p>Description: ${video.description}</p>

      <br>
    `)
    // <button class="add-vid btn btn-primary" data-video="${video.id}">Add to Playlist</button>
    $('#video-index').append(videosHtml)
  })
}

// playlist="${playlist.playlist.id}

const indexVideosFail = function () {
  // console.log('Index Games Failed ', error)
  failureMessage('Cannot Load Videos')
}

const addStateIndexVideosSuccess = responseData => {
  store.videos = responseData.videos
  console.log('responseData is ', responseData)
  // console.log('store playlist is ', store.playlistID)
  // const playlist = store.playlist
  $('#video-index').html('')
  // $('#total-videos').text(`Total Videos: ${store.videos.length}`).show()

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

const addStateIndexVideosFail = function () {
  // console.log('Index Games Failed ', error)
  failureMessage('Cannot Load Videos')
}

const showRandomVideoSuccess = responseData => {
  store.video = responseData.video
  console.log('responseData is ', responseData)
  console.log('store video is ', store.video)
  $('#video-index').html('')
  // $('#total-videos').text(`Total Videos: ${store.videos.length}`).show()

  const videosHtml = (`
      <h3>Episode Title: ${store.video.name}</h3>
      <h4>Episode Number: ${store.video.episode_number}</h4>
      <h4>Original Air Date: ${store.video.air_date}</h4>
      <button id="add-to-playlist" class="btn btn-primary" data-rando-vid="${store.video.id}">Add to Playlist</button>
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
      <button class="add-state btn btn-primary col-mb-3" data-playlist="${store.playlist.id}">Add Episodes To Playlist</button>
    `)

  $('#video-index').append(videosHtml)
  $('#playlist-form').hide()
}

const createPlaylistFail = function () {
  // console.log('Index Games Failed ', error)
  failureMessage('Unable to Create Playlist')
}

const viewPlaylistsSuccess = responseData => {
  store.playlists = responseData.playlists
  console.log('responseData is ', responseData)
  $('#video-status').html('')
  $('#show-delete').show()
  $('#video-index').html('')
  $('#total-videos').html('')
  $('#total-playlists').html('')
  $('#episodes-index').html('')
  $('#new-playlist').show()

  store.playlists.forEach(function (playlist) {
    const playlistsHtml = (`
      <h3>Playlist Title: ${playlist.title}</h3>
      <h4>Number of Episodes: ${playlist.videos.length}</h4>
      <button class="change-title btn btn-primary col-mb-3" data-change="${playlist.id}">Change Title</button>
      <button class="show btn btn-primary col-mb-3" data-playlist="${playlist.id}">Show Episodes</button>


      <br>
    `)
    // <button class="add-state btn btn-primary col-mb-3" data-playlist="${playlist.id}">Add Episodes</button>
    $('#video-index').append(playlistsHtml)

    // store.playlistID = playlist.id
  })
}

const viewPlaylistsFail = function () {
  // console.log('Index Games Failed ', error)
  failureMessage('No Playlists Found')
}

const addVideoToPlaylistSuccess = responseData => {
  store.videos = responseData.videos
  store.playlists = responseData.playlists
  console.log('store.videos is ', store.videos)
  console.log('store.playlists is ', store.playlists)
  // if (store.playlist.videos.indexOf(event.target.data('video') === -1) {
  //   successMessage('Added Video To Playlist')
  // }
  successMessage('Added Video To Playlist')
}

const addVideoToPlaylistFail = function () {
  failureMessage('Unable to add Episode to Current Playlist')
}

// const showPlaylistLength = responseData => {
//   store.playlist = responseData.playlist
//
//   $('#total-playlists').text(`Current Total Videos In Playlist: ${store.playlist.videos.length}`)
// }

const showPlaylistEpisodesSuccess = responseData => {
  store.playlist = responseData.playlist

  console.log('store.playlist is ', store.playlist)
  $('#episodes-index').html('')
  $('#video-index').html('')

  $('#total-videos').text(`Current Playlist: ${store.playlist.title}`)
  $('#total-playlists').text(`Number of Episodes: ${store.playlist.videos.length}`)

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

      $('#episodes-index').append(episodeHtml)
    })
  }
}

const showPlaylistEpisodesFail = function () {
  failureMessage('Unable to Find Episodes')
}

const choosePlaylistSuccess = responseData => {
  store.playlists = responseData.playlists
  console.log('what is store.playlists ', store.playlists)

  $('#playlist-index').html('')
  $('#total-playlists').text(`Total Playlists: ${store.playlists.length}`)

  store.playlists.forEach(function (playlist) {
    const playlistsHtml = (`
      <button class="playlist-add btn btn-primary col-mb-3" data-playlist="${playlist.id}" data-title="${playlist.title}">${playlist.title}</button>
      <br>
    `)

    $('#total-playlists').append(playlistsHtml)
  })
}

const choosePlaylistFail = function () {
  failureMessage('No Playlists Created Yet')
}

const setChangeStateSuccess = function () {
  const playlists = store.playlists
  console.log('playlists at setChange ', playlists)

  $('#video-index').html('')

  playlists.forEach(function (playlist) {
    const changeFormHtml = (`
      <h3>Current Playlist Title: ${playlist.title}</h3>
      <form id="change-title-form" class="col-md-6" data-conf-playlist="${playlist.id}">
        <input class="form-control mb-1" type="text" name="playlist[title]" placeholder="Change Playlist Title">
        <button class="confirm-change btn btn-primary">Confirm Title Change</button>
      </form>

      <br>
    `)

    $('#video-index').append(changeFormHtml)
  })
}

const setChangeStateFail = function () {
  // console.log('Index Games Failed ', error)
  failureMessage('Cannot Edit Selected Playlist')
}

const changePlaylistTitleSuccess = () => {
  // const playlists = store.playlists
  successMessage('Successfully Changed Playlist Title!')
  // console.log('playlists are ', playlists)
  $('#video-index').html('')
}

const changePlaylistTitleFail = function () {
  failureMessage('Unable to Change Playlist Title')
}

const setDeleteStateSuccess = () => {
  const playlists = store.playlists
  console.log('playlists are ', playlists)
  $('#video-index').html('')
  $('#playlist-form').hide()
  $('#new-playlist').show()

  playlists.forEach(function (playlist) {
    const playlistsHtml = (`
      <h3>Playlist Title: ${playlist.title}</h3>
      <h4>Number of Episodes: ${playlist.videos.length}</h4>
      <button class="delete-playlist btn btn-primary col-mb-3" data-del-playlist="${playlist.id}">Delete This Playlist</button>


      <br>
    `)

    $('#video-index').append(playlistsHtml)
  })
}

const setDeleteStateFail = function () {
  // console.log('Index Games Failed ', error)
  failureMessage('No Playlists To Delete!')
}

const deletePlaylistSuccess = () => {
  // const playlists = store.playlists
  successMessage('Successfully deleted playlist')
  // console.log('playlists are ', playlists)
  $('#video-index').html('')

  // playlists.forEach(function (playlist) {
  //   const playlistsHtml = (`
  //     <h3>Playlist Title: ${playlist.title}</h3>
  //     <h4>Number of Episodes: ${playlist.videos.length}</h4>
  //     <button class="delete-playlist btn btn-primary col-mb-3" data-del-playlist="${playlist.id}">Delete This Playlist</button>
  //
  //
  //     <br>
  //   `)

  //   $('#video-index').append(playlistsHtml)
  //   $('.delete-playlist').hide()
  // })
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
  showPlaylistEpisodesSuccess,
  showPlaylistEpisodesFail,
  addVideoToPlaylistSuccess,
  addVideoToPlaylistFail,
  setDeleteStateSuccess,
  setDeleteStateFail,
  deletePlaylistSuccess,
  deletePlaylistFail,
  addStateIndexVideosSuccess,
  addStateIndexVideosFail,
  setChangeStateSuccess,
  setChangeStateFail,
  changePlaylistTitleSuccess,
  changePlaylistTitleFail
}
