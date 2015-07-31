'use strict';

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');
var configDB = require('./config/database.js');

var port = 9999;

mongoose.connect(configDB.url);


app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.use(cors());

app.use(express.static(__dirname+'/views'));

app.use(session({ secret: 'my cat can eat a whole watermelon' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./routes/routes.js')(app, passport);

app.listen(port, function(){
	console.log('now listening on port ' + port);
});