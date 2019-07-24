'use strict'

const store = require('../store')

// const successMessage = message => {
//   $('#game-status').text(message).show().fadeOut(3000)
//   $('#game-status').addClass('success')
//   $('#game-status').removeClass('failure')
//
//   // clear forms
//   $('form').trigger('reset')
// }

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

module.exports = {
  // newGameStart,
  // newGameFail,
  // updateGameSuccess,
  // updateGameFail,
  indexVideosSuccess,
  indexVideosFail,
  showRandomVideoSuccess,
  showVideoFail
  // showGameSuccess,
  // showGameFail
}
