var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var output;
fs.readFile('./Index.html', function read(err, data) {
        if (err) {
            throw err;
        }
        output = data;
    });
app.get('/', function(request, response) {
  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
