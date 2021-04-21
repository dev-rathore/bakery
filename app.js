
const express = require('express');

const app = express();
app.use(express.static("public"));

app.set('view engine', 'ejs');

// app.get("/", function(req, res){
//   res.sendFile(__dirname + "views/layout.ejs");
// });


app.get('/', function(req, res) {
  res.render('pages/layout');
});

app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});