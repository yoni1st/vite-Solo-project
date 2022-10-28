const express = require('express'); 
const mysql = require("mysql");

const app = express(); 
const PORT = process.env.PORT || 5000; 

app.use(express.json());

// create a GET route
app.get('/api', (req, res)=>{//Line 9
  res.status(200);
  res.json({ "users": ["userOne", "userTwo"] })
  //res.send("Welcome to root URL of Server"); Line 10
});//Line 11

app.listen(PORT, (error) =>{
  if(!error)
      console.log("Server is Successfully Running,and App is listening on port "+ PORT)
  else 
      console.log("Error occurred, server can't start", error);
  }
);