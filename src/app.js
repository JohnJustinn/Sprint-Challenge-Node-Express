const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const PORT = 3030;
const STATUS_USER_ERROR = 422;
const SUCCESS = 200;

const server = express();

server.use(bodyParser.json());

server.listen(PORT, err => {
    if (err) {
        console.log(`There was an error starting the server: ${err}`);
    } else {
        console.log(`App listening on port ${PORT}`);
    }
});
