const express = require('express')

const endpoints = express.Router()

endpoints.get('/ok', (req, res) => {
  res.status(200).send('ok')
})

module.exports = endpoints
