var express = require('express');
    app     = express();

var router = require('./router');

app.set('view engine', 'ejs');

app.use('/taco', router);



// app.get("/", function(req,res) {
//   res.send("hello");
// })

// app.get("/fish", function(req,res) {
//   res.send("fish");
// })


app.listen(process.env.PORT || 3000, function() {
  "App is listening on port 3000"
})