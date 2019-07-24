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

module.exports = {
  // newPlaylist,
  // updatePlaylist,
  indexVideos,
  showVideo
}
