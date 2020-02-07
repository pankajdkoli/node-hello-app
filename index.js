const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World asdfasdfada dfasdfasfas')
})

app.get('/test', function(req, res) {
    res.send({name: 'pankaj'});
});

app.listen(4000);