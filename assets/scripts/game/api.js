'use strict'
const config = require('../config')
const store = require('../store')

const overGames = function(){
  return $.ajax({
    url: config.apiUrl + '/games',
    method:'GET'
  })
}
const createGame = function(){
  return $.ajax({
    headers:{
      Authorization: 'Token token=' + store.user.token
    },
    url: config.apiUrl + '/games',
     method:'POST',
     data:''
 })
}

const updateGame = function (index, value, over) {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game._id}`,
    headers:{
      Authorization: 'Token token=' + store.user.token
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
  overGames,
  updateGame,
  createGame,
  destroyGame
}
