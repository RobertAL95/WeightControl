const express = require('express');
const user = require('../components/User/network')
// const followUser = require('../components/followUser/network')

const routes = (server) => {
    // server.use('/message', message)
    server.use('/user', user)
    // server.use('/chat', chat)

}

module.exports = routes;