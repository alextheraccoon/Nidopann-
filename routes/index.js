var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'Express'
  });
});

router.get('/lavorazioni', function(req, res, next) {
  res.render('works', {
    title: 'Express'
  });
});

router.get('/contatti', function(req, res, next) {
  res.render('contacts', {
    title: 'Express'
  });
});

router.get('/chi-siamo', function(req, res, next) {
  res.render('about', {
    title: 'Express'
  });
});

module.exports = router;