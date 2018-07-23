var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('./en/home', {
    path: req.path,
    lang: 'en',
    header: 'Home',
    title: 'Nidopann - Home'
  });
});

router.get('/works', function(req, res, next) {
  res.render('en/works', {
    path: req.path,
    lang: 'en',
    header: 'Our Products',
    title: 'Nidoman - Works'
  });
});

router.get('/contacts', function(req, res, next) {
  res.render('en/contacts', {
    path: req.path,
    lang: 'en',
    header: 'Contacts',
    title: 'Nidopann - Contacts'
  });
});

router.get('/who-are-we', function(req, res, next) {
  res.render('en/about', {
    path: req.path,
    lang: 'en',
    header: 'Who we are',
    title: 'Nidopann - About'
  });
});

module.exports = router;
