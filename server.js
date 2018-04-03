const express = require('express');

// Riot's API Call
const RiotRequest = require('riot-lol-api');
const riotRequest = new RiotRequest('RGAPI-715cc312-2264-4be1-9187-f7f3ee083ce0');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/champions', (req, res) => {
  riotRequest.request(
    'na1',
    'static-data',
    '/lol/static-data/v3/champions?champListData=image&champListData=tags',
    function(err, data) { res.send({ data }) });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
