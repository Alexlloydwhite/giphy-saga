const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');
// pulls giphy key from ENV
const GIPHY_KEY = process.env.GIPHY_API_KEY
// log for testing only DELETE THIS BEFORE PR
console.log('giphy api key:', GIPHY_KEY);
// router for returning search results from GIPHY API
router.get('/', (req,res) => {
    // readability .. search params from our request => const
    const searchParams = req.query.search;
    console.log('Search Params are:', searchParams);

    axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${GIPHY_KEY}&tag=${searchParams}`)
        .then(response => {
            console.log(`Response, Gipy Search For "${searchParams}":`, response.data);
            res.send(response.data);
        })
        .catch(err => {
            console.log(`Error, Giphy Search For "${searchParams}":`, err);
            res.sendStatus(500);
        })
})

module.exports = router;