'use strict'

const api = require('./resource-api')
const ui = require('./resource-ui')
const resourceLogic = require('./resource-logic')
// const store = require('../store')
// const getFormFields = require('./../../../lib/get-form-fields')

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
  // const formData = getFormFields(event.target)

  // console.log('This is the form data ', formData.game)

  api.showVideo(resourceLogic.getRandomNumber(1, 26))
    .then(ui.showRandomVideoSuccess)
    .catch(ui.showVideoFail)
}

module.exports = {
  // onNewGame,
  // onUpdateGame,
  onViewAvailableVideos,
  onRandomVideo

}
