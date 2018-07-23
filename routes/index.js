var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  if (req.locale.language === 'en') {
    res.redirect('/en')
  } else {
    res.redirect('/it')
  }
})

module.exports = router;
