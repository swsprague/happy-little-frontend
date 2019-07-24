'use strict'

const config = require('../config')
const store = require('../store')

const indexVideos = function () {
  return $.ajax({
    url: config.apiUrl + '/videos',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showVideo = function (id) {
  return $.ajax({
    url: config.apiUrl + '/videos/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createPlaylist = formData => {
  return $.ajax({
    url: config.apiUrl + '/playlists',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showPlaylist = function (currentPlaylist) {
  return $.ajax({
    url: config.apiUrl + '/playlists/' + currentPlaylist,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const indexPlaylists = function () {
  return $.ajax({
    url: config.apiUrl + '/playlists',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addVideoToPlaylist = function (currentPlaylist, currentVideo) {
  return $.ajax({
    url: config.apiUrl + '/playlist_videos',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      playlist_video: {
        playlist_id: currentPlaylist,
        video_id: currentVideo
      }
    }
  })
}

// const updatePlaylist = formData

module.exports = {
  createPlaylist,
  indexPlaylists,
  showPlaylist,
  addVideoToPlaylist,
  // updatePlaylist,
  indexVideos,
  showVideo
}
