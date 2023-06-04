// IMPORTS
const express = require('express');
const { router: frontendRouter } = require('./routes/frontend.js');

// VARIABLES
const app = express();
const port = 4400;

// MIDDLEWARE
// for static files
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

// MIDDLEWARE ROUTES
//homepage
app.use('/', frontendRouter);

// api
app.use('/api', apiRouter);

// middleware for compression
app.use(compression({ level: 9 }));

app.listen(port);
