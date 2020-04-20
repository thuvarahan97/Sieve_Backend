var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/userRoute');
var privacyTipsRoute = require('./routes/privacyTipsRoute');
var privacyLawsRoute = require('./routes/privacyLawsRoute');
var suggestionRoute = require('./routes/suggestionRoute');

var adminRoute = require('./routes/adminRoute');
var homeRoute = require('./routes/homeRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: 'SotkanaiScoreboard',
	resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}));

// App Routes
app.use('/user', usersRouter);
app.use('/privacy_tips',privacyTipsRoute);
app.use('/privacy_laws',privacyLawsRoute);
app.use('/suggestion',suggestionRoute);

// Admin Page Routes
app.use('/', adminRoute);
app.use('/home', homeRoute);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  if (!req.session.loggedin) {
      req.session.admin_id = '';
  }
  res.locals.loggedin = req.session.loggedin;
  res.locals.admin_id = req.session.admin_id;
  res.locals.admin_email = req.session.admin_email;
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
