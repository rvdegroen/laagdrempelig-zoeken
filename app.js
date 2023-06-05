// IMPORTS
const express = require('express');
const frontendRoutes = require('./routes/frontend');
// different routers
const apiRoutes = require('./routes/api');

// VARIABLES
const app = express();
const port = 4400;

// MIDDLEWARE
// for static files
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

// MIDDLEWARE ROUTES
app.use('/', frontendRoutes);
app.use('/api', apiRoutes);
// homepage
// app.use('/', frontendRouter);

// api
// app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`The server is running on port http://localhost:${port}/`);
});
