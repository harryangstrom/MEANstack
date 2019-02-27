var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
const MYSECRET = process.env.MYSECRET;
var auth = jwt({
  secret: MYSECRET,
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
