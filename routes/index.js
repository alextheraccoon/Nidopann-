var express = require('express');
var router = express.Router();

var lang = 'it';

function changeLang(newLang) {
  lang = newLang;
}

router.use(function (req,res,next) {
  console.log(lang)
  next()
})

router.param(['lang'], function (req,res,next,value) {
  changeLang(value)
  next()
})

router.get('/', function(req, res, next) {
  if (lang === 'it') {
    res.render('./ita/home', {
      path: req.path,
      lang: 'it',
      header: 'Home',
      title: 'Nidopann - Home'
    });
  } else if (lang === 'en') {
    res.render('./en/home', {
      path: req.path,
      lang: 'en',
      header: 'Home',
      title: 'Nidopann - Home'
    });
  } else {
    res.redirect('/')
  }
});

router.get('/lavorazioni', function(req, res, next) {
  if (lang === 'it') {
    res.render('ita/works', {
      path: req.path,
      lang: 'it',
      header: 'Lavorazioni',
      title: 'Nidoman - Lavorazioni'
    });
  } else if (lang === 'en') {
    // req.url = '/works'
    res.render('en/works', {
      path: req.path,
      lang: 'en',
      header: 'Our Products',
      title: 'Nidoman - Works'
    });
  } else {
    res.redirect('/')
  }
});

router.get('/contatti', function(req, res, next) {
  if (lang === 'it') {
    res.render('ita/contacts', {
      path: req.path,
      lang: 'it',
      header: 'Contatti',
      title: 'Nidopann - Contatti'
    });
  } else if (lang === 'en') {
    // req.url = '/contacts'
    res.render('en/contacts', {
      path: req.path,
      lang: 'en',
      header: 'Contacts',
      title: 'Nidopann - Contacts'
    });
  } else {
    res.redirect('/')
  }
});

router.get('/chi-siamo', function(req, res, next) {
  if (lang === 'it') {
    res.render('ita/about', {
      path: req.path,
      lang: 'it',
      header: 'Chi Siamo',
      title: 'Nidopann - Chi Siamo'
    });
  } else if (lang === 'en') {
    // req.url = '/about-us'
    res.render('en/about', {
      path: req.path,
      lang: 'en',
      header: 'Who we are',
      title: 'Nidopann - About'
    });
  } else {
    res.redirect('/')
  }
});

router.get('*/lang/:lang', function (req, res, next) {
  var newUrl = req.url.slice(0, -8)+'/'
  res.redirect(newUrl)
})



module.exports = router;
