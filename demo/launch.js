var express = require('express');
var app = express();

var PORT = 3000;

app.use(express.static('public'));
app.use('/nerves', express.static(__dirname + '/../nerves/dist'));
app.use('/node-deps', express.static(__dirname + '/node_modules'));


app.listen(PORT,logConnectMessage)

function logConnectMessage() {
    console.log('Demo running on port ' + PORT);
}