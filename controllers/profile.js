/**
 * Controller to display user profile
 */
var express = require('express');
var router = express.Router();

var BoxUtils = require('../box-service/boxUtils');

// fetch app user token
router.get('/', function(req, res) {
  BoxUtils.getAppUserToken(req.user.boxId)
    .then(token => {
      req.user.token = token;
      res.render('profile', { user: req.user });
    })
    .catch(err => {
      console.log("Error:", err.message);
      res.render('profile', { user: req.user });
    });
});

module.exports = router;
