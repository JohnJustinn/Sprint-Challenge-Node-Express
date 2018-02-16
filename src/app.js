const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const PORT = 3030;
const STATUS_USER_ERROR = 422;
const SUCCESS = 200;
const CURRENT_PRICE_URL = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json';
const PREVIOUS_PRICE_URL = 'https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday';

const app = express();

app.use(bodyParser.json());

app.get('/current', (req, res) => {
    const current = req.body.current;
    const url = CURRENT_PRICE_URL;
    console.log(CURRENT_PRICE_URL)
    fetch(url)
        .then(current => current.json())
        .then(current => {
            console.log(current);
            res.status(SUCCESS);
            res.json(current);
        })
            .catch(err => {
                res.status(STATUS_USER_ERROR);
                res.json({ error: err });
            });
});

app.get('/previous', (req, res) => {
    const previous = req.body.previous;
    const url = PREVIOUS_PRICE_URL;
    console.log(PREVIOUS_PRICE_URL)
    fetch(url)
        .then(previous => previous.json())
        .then(previous => {
            console.log(previous);
            res.status(SUCCESS);
            res.json(previous);
        })
        .catch(err => {
            res.status(STATUS_USER_ERROR);
            res.json({ error: err });
        });
});

app.listen(PORT, err => {
    if (err) {
        console.log(`There was an error starting the server: ${err}`);
    } else {
        console.log(`App listening on port ${PORT}`);
    }
});
