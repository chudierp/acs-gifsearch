// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware
const { engine } = require('express-handlebars');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.set("views", "./views");
// Routes


app.get('/', 
  (req, res) => {
    res.render('home');
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