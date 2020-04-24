var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var c = require('./utils/hash_function');

//* Admin Routes Files
var adminRoute = require('./routes/adminRoutes/adminRoute');
var categoriesRoute = require('./routes/adminRoutes/adminCategoriesRoute');
var appsRoute = require('./routes/adminRoutes/adminAppsRoute');
var newsfeedsRoute = require('./routes/adminRoutes/adminNewsFeedsRoute');
var privacyTipsRoute = require('./routes/adminRoutes/adminPrivacyTipsRoute');
var privacyLawsRoute = require('./routes/adminRoutes/adminPrivacyLawsRoute');
var adminsRoute = require('./routes/adminRoutes/adminAdminsRoute');
var usersRoute = require('./routes/adminRoutes/adminUsersRoute');
var suggestionsRoute = require('./routes/adminRoutes/adminSuggestionsRoute');

//* App Routes Files
var appUsersRouter = require('./routes/appRoutes/userRoute');
var appPrivacyTipsRoute = require('./routes/appRoutes/privacyTipsRoute');
var appPrivacyLawsRoute = require('./routes/appRoutes/privacyLawsRoute');
var appSuggestionRoute = require('./routes/appRoutes/suggestionRoute');
var interestingNewsRoute = require('./routes/appRoutes/interestingNewsRoute');

//* App Routes Files

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
  saveUninitialized: true,
  unset: 'destroy',
  cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000
  }
}));

app.use(function(req, res, next) {
  res.locals.loggedin = req.session.loggedin;
  res.locals.admin_id = req.session.admin_id;
  res.locals.admin_email = req.session.admin_email;
  next();
});

// App Routes
// app.use('/user', usersRouter);
// app.use('/privacy_tips',privacyTipsRoute);
// app.use('/privacy_laws',privacyLawsRoute);
// app.use('/suggestion',suggestionRoute);

//* Admin Page Routes
app.use('/', adminRoute);
app.use('/categories', categoriesRoute);
app.use('/apps', appsRoute);
app.use('/newsfeeds', newsfeedsRoute);
app.use('/privacy_tips',privacyTipsRoute);
app.use('/privacy_laws',privacyLawsRoute);
app.use('/admins', adminsRoute);
app.use('/users', usersRoute);
app.use('/suggestions',suggestionsRoute);

//* App Routes
app.use('/app/user', appUsersRouter);
app.use('/app/privacy_tips',appPrivacyTipsRoute);
app.use('/app/privacy_laws',appPrivacyLawsRoute);
app.use('/app/suggestion',appSuggestionRoute);
app.use('/app/interesting_news',interestingNewsRoute);

//Session Variables
app.use(function (req, res, next) {
  res.locals.loggedin = req.session.loggedin,
  res.locals.admin_id = req.session.admin_id,
  res.locals.admin_email = req.session.admin_email
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
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