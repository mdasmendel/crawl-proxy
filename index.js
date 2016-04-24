var express = require('express');
var request = require('request');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/proxy', function (req, res) {
    console.log(req.body.method)
    request(req.body, function (err, resp, body) {
        if(resp.statusCode){
            res.status(400).send(body)
        } else {
            res.status(200).send(body)
        }
    })
//   res.send('Hello World!');
});


app.listen(3333, function () {
    
  console.log('Example app listening on port 3333!');
});