var express = require('express'); 
var app = express(); 
var PORT = 12345; 
  
// View engine setup 
app.set('view engine', 'ejs'); 
  
// With middleware 
app.use('/', function(req, res, next){ 
    res.render('index') 
    next(); 
}); 
  

app.post('/',function(req,res){
    //res.render('showInfo');
    //res.redirect('http://google.com');
})

app.listen(PORT, function(err){ 
    if (err) console.log(err); 
    console.log("Server listening on PORT", PORT); 
});

