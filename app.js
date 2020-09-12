const express = require('express');
const bodyParser = require('body-parser');

const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

try {
    db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

app.get('/', (req,res)=>{
    res.send("This comment-app backend works fine!!");
  
});

app.use('/api/posts', require('./routes/postRoute'));
app.use('/api/comments', require('./routes/commentRoute'));
app.use('/api/replies', require('./routes/replyRoute'));

app.listen(PORT, ()=> console.log(`server is working on port - ${PORT}!!`));