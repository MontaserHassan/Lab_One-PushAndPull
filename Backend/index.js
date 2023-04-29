const express = require('express');
const mongoClient = require('mongoose');
const routes = require('./routes');
var cors = require('cors')
require('dotenv').config();


const app = express();

const MONGO_URL = process.env.MONGO_URL; 
app.use(cors());
app.use(express.json());

mongoClient.connect(MONGO_URL)
  .then(() => {
    console.log('Connected to database');
  }).catch((error) => {
    console.log('Error connecting to database');
  });


app.use(routes);



app.get('/', (req, res) => res.send('Hello Push And Pull!'));


const PORT = process.env.PORT;
app.listen(PORT, 
    () => console.log(`Example app listening on PORT ${PORT}!`)
);