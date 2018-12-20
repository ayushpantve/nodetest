const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  let now = new Date().toString();
  console.log(`${now}: ${req.method} : ${req.url}`);
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.render('home.hbs',{
      pageTitle: 'About Page',
      creator: 'AYUSH',
      homeMessage: 'Yes this is now home page and looks great'
    });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    creator: 'AYUSH'
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Sorry the page is not working, this is totally bad request'
  });
});

app.listen(3000);
