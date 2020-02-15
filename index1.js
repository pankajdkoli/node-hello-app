
const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const genres = require('./genres');
const express = require('express');
const users = require('./users');
const app = express();

//connection with database
mongoose.connect('mongodb://localhost/pankaj', {useNewUrlParser: true, useUnifiedTopology: true,})
.then(() => console.log('connect to mongodb....?'))
.catch(error => console.error('could not connect to MongoDB',error));

 app.use(express.json()); 
 app.use('/api/genres', genres);
 app.use('api/users', users);
// app.get('/', function (req, res) {
//     res.send('Hello World dd')
//   })  
 const port = process.env.PORT || 3002;

 app.listen(port, ()=> console.log(`listening on port ${port}....`));  