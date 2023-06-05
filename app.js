// IMPORTS
const express = require('express');
const frontendRoutes = require('./routes/frontend');
const fetch = require('node-fetch');
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
app.get("/fetch-data", async (req, res) => {
    const publicKey = "0076bc3bc11d080e07a303360178002a";
    // const privateKey = "1a3b58ea286b7117a29af";
  
    const apiUrl = "https://zoeken.oba.nl/api/v1/search/?q=harry";
    const publicKeyParam = `&authorization=${publicKey}`;
    const outputParam = "&output=json";
  
    const apiUrlWithParams = apiUrl + publicKeyParam + outputParam;
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    const corsApiUrl = corsProxy + apiUrlWithParams;
  
    try {
      const response = await fetch(corsApiUrl, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseBody = await response.text();
      console.log(responseBody); // Log the fetched data to the console
      res.render("index.ejs", { responseBody });
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({ error: "An error occurred" });
    }
  });


app.listen(port, () => {
    console.log(`The server is running on port http://localhost:${port}/`);
});
