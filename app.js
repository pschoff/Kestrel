var express = require('express');
var app = express();

process.env.PWD = process.cwd();


app.use(express.static(process.env.PWD + '/public'));
app.listen(3000);
console.log('Listening on port 3000');