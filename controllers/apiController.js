// if you write something in line it shows up in http://localhost:4400/api/example
// in frontend: fetch(/api/example)
// exports.getExample = function (req, res) {
//     res.json({ hello: 'idk' });
// };

// // send http to api with fetch
// exports.postExample = function (req, res) {
//     res.json({});
// };

const fetch = require('node-fetch');

const fetchData = async (req, res) => {
  const publicKey = "0076bc3bc11d080e07a303360178002a";
  const privateKey = "1a3b58ea286b7117a29af";

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
    res.render("pages/index.ejs", { responseBody });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  fetchData,
};

