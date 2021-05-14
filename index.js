const express = require('express')

const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
  });

const app = express();
const port = process.env.PORT || 5000;


app.listen(port, error => {
  if(error) throw error;
  console.log(`Server listening on ${port}`);
});


