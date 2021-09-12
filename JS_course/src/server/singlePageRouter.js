const express = require('express');
const fs = require('fs');
const handler = require('./handler');
const router = express.Router();
const path = require('path');

const linkJSONPath = path.resolve(__dirname, './json/linkGood.json');

router.get('/', (req, res) => {
    fs.readFile(linkJSONPath, 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
        } else {
            res.send(data);
        }
    });
});

router.post('/', (req, res) => {
    handler(req, res, 'link', linkJSONPath);
});

module.exports = router;
