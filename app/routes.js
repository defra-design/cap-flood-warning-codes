const express = require('express')
const router = express.Router()

// Add your assets here
router.get('/inactive', function (req, res) {
  res.render('inactive')
})
router.get('/removed', function (req, res) {
  res.render('removed')
})
router.get('/alert', function (req, res) {
  res.render('alert')
})
router.get('/warning', function (req, res) {
  res.render('warning')
})
router.get('/severe', function (req, res) {
  res.render('severe')
})

module.exports = router
