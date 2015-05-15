var express = require('express');
var app = express();

process.env.PWD = process.cwd();


app.use(express.static(process.env.PWD + '/public'));
var port = process.env.PORT || 8000
app.listen(port);
console.log('Listening on port 8000');