var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('./it/home', {
    path: req.path,
    lang: 'it',
    header: 'Home',
    title: 'Nidopann - Home'
  });
});

router.get('/works', function(req, res, next) {
  res.render('it/works', {
    path: req.path,
    lang: 'it',
    header: 'Lavorazioni',
    title: 'Nidoman - Lavorazioni'
  });
});

router.get('/contacts', function(req, res, next) {
  res.render('it/contacts', {
    path: req.path,
    lang: 'it',
    header: 'Contatti',
    title: 'Nidopann - Contatti'
  });
});

router.get('/who-are-we', function(req, res, next) {
  res.render('it/about', {
    path: req.path,
    lang: 'it',
    header: 'Chi Siamo',
    title: 'Nidopann - Chi Siamo'
  });
});

module.exports = router;
