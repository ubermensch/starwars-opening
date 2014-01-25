var express = require('express');
var app = express();

// Serve everything from public.
app.use(express.static(__dirname + '/public'));

app.use(function(req, res){
  res.sendfile(__dirname + "/public/index.html");
});

var port = Number(process.env.PORT || 3000);
app.listen(port, function() {
  console.log("Listening on " + port);
});