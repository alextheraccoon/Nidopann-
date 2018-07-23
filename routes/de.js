var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('./de/home', {
    path: req.path,
    lang: 'de',
    header: 'Home',
    title: 'Nidopann - Home'
  });
});

router.get('/works', function(req, res, next) {
  res.render('de/works', {
    path: req.path,
    lang: 'de',
    header: 'Our Products',
    title: 'Nidoman - Works'
  });
});

router.get('/contacts', function(req, res, next) {
  res.render('de/contacts', {
    path: req.path,
    lang: 'de',
    header: 'Contacts',
    title: 'Nidopann - Contacts'
  });
});

router.get('/who-are-we', function(req, res, next) {
  res.render('de/about', {
    path: req.path,
    lang: 'de',
    header: 'Who we are',
    title: 'Nidopann - About'
  });
});

module.exports = router;
