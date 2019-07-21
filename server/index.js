const express = require('express');
var async  = require('express-async-await');
var fetch = require('node-fetch');
var cors = require('cors');
const app = express();

app.use(cors())

app.get('/api/products/:gameType', async (req, res)=>{
	let response = await fetch('http://www.atg.se/services/racinginfo/v1/api/products/'+req.params.gameType);
	let data = await response.json();
	res.send(data);
});
app.get('/api/gameType/:gameId', async (req, res)=>{
	let response = await fetch('https://www.atg.se/services/racinginfo/v1/api/games/'+req.params.gameId);
	let data = await response.json();
	res.send(data);
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001 - Proxy server')
);
