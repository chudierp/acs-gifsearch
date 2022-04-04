// Require Libraries
const fetch = require('node-fetch');
require('dotenv').config();

const express = require('express');

// App Setup
const app = express();

// Middleware
const { engine } = require('express-handlebars');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.set("views", "./views");

app.use(express.static('public'));
// Routes

app.get('/', 
  (req, res) => {
    let term = "";
    if (req.query.term) {
      term = req.query.term
    }
    fetch(`https://g.tenor.com/v1/search?q=${term}&key=${process.env.API_KEY}&limit=10`)
    .then(response => response.json())
    .then(
      (data) => {
        const gifs = data.results;
        res.render('home', { gifs });
      }
    );
  }
);

app.get('/hello/:name', 
  (req, res) => {
    const name = req.params.name;
    res.send(`hey ${name}`.toUpperCase());
  }
);

// Start Server
app.listen(3000, 
    () => {
      console.log(`Gif Search listening on http://localhost:3000/`);
    }
  );