var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var materialicons = require('material-icons/iconfont/codepoints.json');


var c = require('./controllers/appController/privacyPolicyController');

//* Admin Routes Files
var adminRoute = require('./routes/adminRoutes/adminRoute');
var categoriesRoute = require('./routes/adminRoutes/adminCategoriesRoute');
var appsRoute = require('./routes/adminRoutes/adminAppsRoute');
var interestingNewsRoute = require('./routes/adminRoutes/adminInterestingNewsRoute');
var privacyTipsRoute = require('./routes/adminRoutes/adminPrivacyTipsRoute');
var privacyLawsRoute = require('./routes/adminRoutes/adminPrivacyLawsRoute');
var adminsRoute = require('./routes/adminRoutes/adminAdminsRoute');
var usersRoute = require('./routes/adminRoutes/adminUsersRoute');
var suggestionsRoute = require('./routes/adminRoutes/adminSuggestionsRoute');

//* App Routes Files
var appUsersRouter = require('./routes/appRoutes/userRoute');
var appCategoriesRouter = require('./routes/appRoutes/categoriesRoute');
var appAppsRouter = require('./routes/appRoutes/appsRoute');
var appPrivacyTipsRoute = require('./routes/appRoutes/privacyTipsRoute');
var appPrivacyLawsRoute = require('./routes/appRoutes/privacyLawsRoute');
var appSuggestionRoute = require('./routes/appRoutes/suggestionRoute');
var appInterestingNewsRoute = require('./routes/appRoutes/interestingNewsRoute');
var appPrivacyPolicyRoute = require('./routes/appRoutes/privacyPolicyRoute');

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
app.use('/categories', express.static(path.join(__dirname, 'public')));
app.use('/interesting_news', express.static(path.join(__dirname, 'public')));
app.use('/apps', express.static(path.join(__dirname, 'public')));
app.use('/users', express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: 'SieveSession',
	resave: false,
  saveUninitialized: false,
  unset: 'destroy',
  cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000
  }
}));

//Material Icons
app.use(function (req, res, next) {
  res.locals.materialicons = materialicons;
  next();
});

// app.use(function (req, res, next){
//   if (!req.session.loggedin && req.url != '/login') {
//     res.redirect('/login');
//     return;
//   }
//   next();
// });

//Session Variables
app.use(function (req, res, next) {
  res.locals.loggedin = req.session.loggedin;
  res.locals.admin_id = req.session.admin_id;
  res.locals.admin_email = req.session.admin_email;
  next();
});

//* Admin Page Routes
app.use('/', adminRoute);
app.use('/categories', categoriesRoute);
app.use('/apps', appsRoute);
app.use('/interesting_news', interestingNewsRoute);
app.use('/privacy_tips',privacyTipsRoute);
app.use('/privacy_laws',privacyLawsRoute);
app.use('/admins', adminsRoute);
app.use('/users', usersRoute);
app.use('/suggestions',suggestionsRoute);

//* App Routes
app.use('/app/user', appUsersRouter);
app.use('/app/categories', appCategoriesRouter);
app.use('/app/apps', appAppsRouter);
app.use('/app/privacy_tips',appPrivacyTipsRoute);
app.use('/app/privacy_laws',appPrivacyLawsRoute);
app.use('/app/suggestion',appSuggestionRoute);
app.use('/app/interesting_news',appInterestingNewsRoute);
app.use('/app/privacy_policy',appPrivacyPolicyRoute);

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

// c.view_all2();

module.exports = app;