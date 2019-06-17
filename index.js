const bodyParser = require('body-parser');

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const morgan = require('morgan');

// DEFINE ROUTES
const userRoutes = require('./api/routes/Users');
const bookRoutes = require('./api/routes/Books');
const institutionRoutes = require('./api/routes/Institutions');


// API LOGGING
app.use(morgan('dev'));

// BODY PARSE CONFIG
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// IMPORT ROUTES
app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/institutions', institutionRoutes);


// ERROR EVENT BUBBLING
app.use((req, res, next) => {
  const err = new Error('Resource not found');

  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  const errorCode = err.status | 500;

  res.json({
    message: err.message + ' | status: ' + errorCode
  });
  next(err);
});

mongoose.connect('mongodb+srv://admin:' + process.env.MONGO_ATLAS_PW + '@node-rest-npcue.mongodb.net/test?retryWrites=true&w=majority',
   { useNewUrlParser: true
   }
);

let db = mongoose.connection;

const PORT = process.env.PORT || 3000;


// Allow for json in body payload
app.listen(PORT, () => console.log(`Open http://localhost:3000 to see a response.`));
