const express = require('express');
const app = express();
app.listen(3001, function ()
{
	console.log('listening on port 3001');
});

app.get('/', function (req, res)
{
	res.send('Hi this is my website :)');
});