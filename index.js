const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const userRoutes = require('./api/routes/Users');
const bookRoutes = require('./api/routes/Books');
const institutionRoutes = require('./api/routes/Institutions');

app.use(morgan('dev'));

app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/institutions', institutionRoutes);


// mongoose.connect('mongodb+srv://admin:' + process.env.MONGO_ATLAS_PW + '@node-rest-npcue.mongodb.net/test?retryWrites=true&w=majority',
//    { useNewUrlParser: true
//    }
// );
//
// let db = mongoose.connection;

const PORT = process.env.PORT || 3000;


// Allow for json in body payload
app.listen(PORT, () => console.log(`Open http://localhost:3000 to see a response.`));
