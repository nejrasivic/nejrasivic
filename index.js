const express = require('express');
const bodyParser = require('body-parser');
const fs =  require('fs');
const app = express(); 
const path = require("path");
const db = require('./db.js');

app.use(express.static('/public')); //opslužuje statičke datoteke, slike, css datoteke i js datoteke 
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));


//kreiramo tabele iz definisanih modela
 db.sequelize.sync().then(function(){
});


//http://localhost:3000/ url za otvaranje glavne odnosno početne stranice 
app.get('/',function( req,res){ 
    res.sendFile(path.join(__dirname, "public", "glavna.html"));
});
app.get('/zahvala',function( req,res){ 
    res.sendFile(path.join(__dirname, "public", "zahvala.html"));
});
app.get('/pocetnaS',function( req,res){ 
    res.sendFile(path.join(__dirname, "public", "pocetna.html"));
});
app.get('/prijava',function( req,res){ 
    res.sendFile(path.join(__dirname, "public", "login.html"));
});
app.post('/registracija',function( req,res){
    res.sendFile(path.join(__dirname, "public", "registracija.html"));
});


app.post('/posaljiReg', function(req,res){
    //upisati podatke u bazu i otvoriti zahvala
    db.user.create({
        ime: req.body.user_name,
        email: req.body.user_email,
        password: req.body.user_password,
        brojTelefona: req.body.user_number
    });
    res.redirect('/zahvala');

});

app.post('/pocetna', function(req,res){
    //upisati podatke u bazu i otvoriti zahvala
    let username = req.body.username; //vrijednosti koje je unio preko inputa
    let pw = req.body.pw; //the same
    db.user.findOne({where:{password: pw, ime: username}}).then(function(osoba){
        if(osoba==null){
          res.redirect('/');  //ako nije registrovan, vraća korisnika na registraciju 
        }else{
            res.redirect('/pocetnaS');
        }      
    });

});
app.listen(3000, () => {
    console.log('Server radi na portu  3000...');
});