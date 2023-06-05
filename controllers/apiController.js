const obaService = require('../services/oba');
const openAiService = require('../services/openai');

// if you write something in line it shows up in http://localhost:4400/api/example
// in frontend: fetch(/api/example)
exports.getExample = function (req, res) {
    res.json({ hello: 'idk' });
};

// send http to api with fetch
exports.postExample = function (req, res) {
    res.json({});
};

// POST /api/search
exports.search = function (req, res) {
    // Get data from request
    const query = req.body.query;

    console.log('query', query);

    // No query: send back error to frontend
    if (!query) {
        return res.status(400).send('No query provided');
    }

    const entities = openAiService.parseQuery(query);
    const results = obaService.search(entities);

    // Give back results
    return res.json(results);
};
