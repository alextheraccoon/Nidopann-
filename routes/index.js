var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'Nidopann - Home'
  });
});

router.get('/lavorazioni', function(req, res, next) {
  res.render('works', {
    title: 'Nidoman - Lavorazioni'
  });
});

router.get('/contatti', function(req, res, next) {
  res.render('contacts', {
    title: 'Nidopann - Contatti'
  });
});

router.get('/chi-siamo', function(req, res, next) {
  res.render('about', {
    title: 'Nidopann - Chi Siamo'
  });
});

module.exports = router;
