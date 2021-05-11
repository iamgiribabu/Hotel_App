const express = require('express')

const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
  });

const app = express()
const PORT = process.env.PORT || 3001;

// app.get("/api", (req, res) => {


//     res.send('this is welcome to hotel wah!!');
// });
app.get('/cost')

app.post('/Dbpost',

)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });



  C 
  U
  R 
  D 