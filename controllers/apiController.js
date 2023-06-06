const obaService = require('../services/oba');
const openAiService = require('../services/openai');

// if you write something in line it shows up in http://localhost:4400/api/example
// in frontend: fetch(/api/example)
// exports.getExample = function (req, res) {
//     res.json({ hello: 'idk' });
// };

// // send http to api with fetch
// exports.postExample = function (req, res) {
//     res.json({});
// };

// // POST /api/search
// exports.search = function (req, res) {
//     // Get data from request
//     const query = req.body.query;

//     console.log('query', query);

//     // No query: send back error to frontend
//     if (!query) {
//         return res.status(400).send('No query provided');
//     }

//     const entities = openAiService.parseQuery(query);
//     const results = obaService.search(entities);

//     // Give back results
//     return res.json(results);
// };

const fetch = require('node-fetch');

const fetchData = async (req, res) => {
  const publicKey = "0076bc3bc11d080e07a303360178002a";
  const query = req.body.query; 

  const apiUrl = "https://zoeken.oba.nl/api/v1/search/?q=" + query;;
  const publicKeyParam = `&authorization=${publicKey}`;
  const outputParam = "&output=json";

  const apiUrlWithParams = apiUrl + publicKeyParam + outputParam;
  const corsProxy = 'https://cors-anywhere.herokuapp.com/';
  const corsApiUrl = corsProxy + apiUrlWithParams;
  console.log(corsApiUrl)

  try {
    // Make the API request using fetch
    const response = await fetch(corsApiUrl, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        
      },
    });

    if (!response.ok) {
        // Throw an error if the response is not successful
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the response body as text
    const responseBody = await response.text();
    // console.log(responseBody); // Log the fetched data to the console
    
    // Render the response in the index.ejs template
    // res.render("pages/index.ejs", { responseBody });
    res.json({ data: responseBody });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  fetchData
};