const express = require('express');
const bodyParser = require('body-parser');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const db = require('./config/connection');
const app = express();

// swagger definition ========================================

var swaggerDefinition = {
  info: {
      title: 'Blog Site API Documentation',
      version: '1.0.0',
      description: 'Documentation for Blog Site backend',
  },
  host: ['localhost:5000'],
  basePath: '/',
  schemes:["https","http"]
};

// options for the swagger docs
var options = {
  swaggerDefinition: swaggerDefinition,
  apis: ['./routes/*.js'],
};


// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//============================================================

const PORT = process.env.PORT || 5000;

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