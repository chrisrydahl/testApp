const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const config = require("./config");
const routes = require("./routes");
const database = require("./utils/db");
const path = require('path')

const app = express();

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'medgo-app-client/build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": true }));
app.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization,Content-Length,X-Requested-With,x-access-token,X-HTTP-Method-Override");


    console.log('[+] ' + req.method + ' REQUEST to ' + req.path);
    next();


});
app.use(routes);

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'medgo-app-client/build', 'index.html'))
});
var listener = http.createServer(app).listen(process.env.PORT || config.port.http);
console.info('[+] HTTP server started, listening on port ' + listener.address().port +  ' at ' + new Date());