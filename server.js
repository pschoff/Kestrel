var express = require('express');
var app = express();
var path = require('path');
process.env.PWD = process.cwd();

app.use(express.static(path.join(process.env.PWD, 'public'))); 

app.listen(3000);
console.log('Listening on port 3000');