'use strict'

// const store = require('../store')

const getRandomNumber = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports = {
  getRandomNumber
}