var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//localhost:3000
app.use('/', indexRouter);

//localhost:3000/api/occurences
//API page that can be used to retrieve JSON data from my Server
app.use('/api', apiRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
})
