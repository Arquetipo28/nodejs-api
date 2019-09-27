const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const app = express();

app.use( logger('dev') );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false }) );

require('./routes/index')(app);

app.listen(3000, () => {
    console.log('Server is running')
})
