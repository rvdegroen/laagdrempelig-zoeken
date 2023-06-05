// if you write something in line it shows up in http://localhost:4400/api/example
// in frontend: fetch(/api/example)
exports.getExample = function (req, res) {
    res.json({ hello: 'idk' });
};

// send http to api with fetch
exports.postExample = function (req, res) {
    res.json({});
};
