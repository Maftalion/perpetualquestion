var express = require('express'); 

var app = express(); 

//We may need middleware for express


app.use(express.static(__dirname + '/../Client'));
console.log(__dirname);


//We may need to set up routing base on our need
app.get('/', function(req, res){
  res.render('index');
})

app.listen(3000); 