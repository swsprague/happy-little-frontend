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

const indexPlaylists = function () {
  return $.ajax({
    url: config.apiUrl + '/playlists',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const updatePlaylist = formData

module.exports = {
  createPlaylist,
  indexPlaylists,
  // updatePlaylist,
  indexVideos,
  showVideo
}
