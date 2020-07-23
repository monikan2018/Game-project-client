'use strict'
const config = require('../config')
const store = require('../store')

const index = function(){
  return $.ajax({
    url:config.apiUrl + '/games/over?',
    method:'GET'
  })
}

const updateGame = function (index, value, over) {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    method: 'PATCH',
    data: {
      'game':{
        'cell':{
          'index': index,
          'value': value
          },
      'over': over
      }
    }
  })
}

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + `/games`,
    headers:{
      Authorization: 'Token token=' + store.user.Token
    },
    method: 'POST',
    data: ''
  })
}

module.exports = {
  index,
  updateGame,
  createGame
}
