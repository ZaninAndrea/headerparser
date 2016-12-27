// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
app.enable('trust proxy');
app.get('/*', function (req, res) {
  var agent=req.get("User-Agent").match(/\(([\w\d\s.:;]+)\)/)[1];
  var ip=req.ip;
  var language=req.get("Accept-Language").split(",")[0];
  var response={"software":agent,"ipaddress":ip,"language":language};
  res.send(JSON.stringify(response));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})