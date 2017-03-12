var express = require('express');
var http = require('http');
var path = require('path');
var m = require('mori');

var app = express();
var server = http.Server(app);

app.get('/', function (req, res) {
  res.send('hello world')
});

app.listen(3000, function () {
  console.log('skeleton service listening on port 3000!')
})
