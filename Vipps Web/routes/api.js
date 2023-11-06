var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const  countTopicNumOccurences  = require('../util/countTopicNumOccurences');

router.get('/', function(req, res, next) {
  res.json({status: 200, version: 0.1, name: "Wiki API"});
});

//API Route
//go to /api/occurences?topic=[topic] to get specific data from a topic
//Sends JSON Data on how many words the page has
router.get("/occurences", async (req, res) => {
  const topic = req.query.topic;
  const url = `https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page=${topic}`

  const data = await fetch(url)
  const json = await data.json()

  //if topic is invalid or doesn't exist
  if (json.error) {
    res.sendStatus(404)
    return
  }

  const count = countTopicNumOccurences(topic, json.parse.text['*'])

  res.json({count: count});
});

module.exports = router;
