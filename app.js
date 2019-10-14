var express = require('express');

var app = express();



// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('views/public'));
app.get('/',function(req,res){
    res.sendfile('views/home.html');
})
app.get('/home',function(req,res){
    res.sendfile('views/home.html');
})
app.get('/index',function(req,res){
    res.sendfile('views/index.html');
})
app.get('/profile',function(req,res){
    res.sendfile('views/profile.html');
})
app.get('/welcome',function(req,res){
    res.sendfile('views/welcome.html');
})
app.get('/registration',function(req,res){
    res.sendfile('views/registration.html');
})

app.listen(3000,()=>{
    console.log("Server is Working");
})
