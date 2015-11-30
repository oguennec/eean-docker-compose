var express = require("express");
var path = require('path')
var app = express();
var port = 8089;

app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/public-lib')));
app.use(function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.listen(port, function () {
    console.log('Running on http://localhost:' + port);
})
