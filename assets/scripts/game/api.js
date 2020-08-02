'use strict'

const config = require('../config')
const store = require('../store')

const index = function() {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'GET',
    data: {}
  })
}
const createGame = function(){
  return $.ajax({
    headers:{
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
     method:'POST',
     data: {}
 })
}

const updateGame = function (index, value, over) {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game._id}`,
    headers:{
      Authorization: 'Bearer ' + store.user.token
    },
    method:'PATCH',
    data: {
      "game":{
        'cell':{
          'index': index,
          'value': value
          },
       'over': over
      }
    }
  })
}


const destroyGame = function(){
  return $.ajax({
    url: config.apiUrl + `/games/${store.game._id}`,
    method:'DELETE'
  })
}

module.exports = {
  index,
  updateGame,
  createGame,
  destroyGame
}
