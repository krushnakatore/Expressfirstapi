const express = require("express");

const app = express();

app.listen(2345,function(){
    console.log("")
})

app.get("/",(req,res)=>{
    const a = [{"id":1,"first_name":"Ryann","last_name":"Lowerson","email":"rlowerson0@csmonitor.com","gender":"Female","ip_address":"176.186.144.66"},
    {"id":2,"first_name":"Anabella","last_name":"Dodsley","email":"adodsley1@fema.gov","gender":"Female","ip_address":"240.236.69.73"},
    {"id":3,"first_name":"Any","last_name":"Dudeney","email":"adudeney2@tumblr.com","gender":"Female","ip_address":"71.89.4.185"}];
    // res.send(a);
    res.send("Welcome to my Homepage")
    
})
app.get("/users",(req,res)=>{
    res.sendFile(__dirname+"/MOCK_DATA.json")
    // res.send(a);
    // res.send("Welcome to my Homepage")
    
})