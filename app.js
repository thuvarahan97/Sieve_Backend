var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var materialicons = require('material-icons/iconfont/codepoints.json');

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
var dataTypesRoute = require('./routes/adminRoutes/adminDataTypesRoute');

//* App Routes Files
var appUsersRouter = require('./routes/appRoutes/userRoute');
var appCategoriesRouter = require('./routes/appRoutes/categoriesRoute');
var appAppsRouter = require('./routes/appRoutes/appsRoute');
var appPrivacyTipsRoute = require('./routes/appRoutes/privacyTipsRoute');
var appPrivacyLawsRoute = require('./routes/appRoutes/privacyLawsRoute');
var appSuggestionRoute = require('./routes/appRoutes/suggestionRoute');
var appInterestingNewsRoute = require('./routes/appRoutes/interestingNewsRoute');
var appPrivacyPolicyRoute = require('./routes/appRoutes/privacyPolicyRoute');
var appDashboardRoute = require('./routes/appRoutes/dashboardRoute');

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
app.use('/privacy_laws', express.static(path.join(__dirname, 'public')));
app.use('/privacy_tips', express.static(path.join(__dirname, 'public')));
app.use('/admins', express.static(path.join(__dirname, 'public')));
app.use('/suggestions', express.static(path.join(__dirname, 'public')));
app.use('/datatypes', express.static(path.join(__dirname, 'public')));

app.use(session({
	secret: 'SieveSession',
  resave: false,
  saveUninitialized: true,
  unset: 'destroy',
  cookie: {
      maxAge: Date.now() + (30 * 24 * 60 * 60 * 1000)
  }
}));

//Material Icons
app.use(function (req, res, next) {
  res.locals.materialicons = materialicons;
  next();
});

//User session redirection
app.use(function (req, res, next){
  if (req.url.split("/")[1] !== 'app') {
    if (!req.session.loggedin) {
      if (req.url != '/' && req.url != '/login' && req.url != '/signup') {
        res.status(302).redirect('/login');
        return;
      }
    } else {
      if (req.url == '/' || req.url == '/login' || req.url == '/signup' || req.url == '/login/' || req.url == '/signup/') {
        res.status(302).redirect('/categories');
        return;
      }
    }
  }
  next();
});

app.use(function (req, res, next) {
  if (req.session.admin && req.session.admin.privilege_level == "0" && (req.url == '/admins/' || req.url == '/categories/' || req.url == '/datatypes/')) {
    res.status(302).redirect('/apps');
    return;
  }
  next();
});

//Session Variables
app.use(function (req, res, next) {
  res.locals.loggedin = req.session.loggedin;
  res.locals.admin = req.session.admin;
  next();
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, OPTIONS, DELETE");
  next();
});

//* Admin Page Routes
app.use('/', adminRoute);
app.use('/categories', categoriesRoute);
app.use('/apps', appsRoute);
app.use('/interesting_news', interestingNewsRoute);
app.use('/privacy_tips', privacyTipsRoute);
app.use('/privacy_laws', privacyLawsRoute);
app.use('/admins', adminsRoute);
app.use('/users', usersRoute);
app.use('/suggestions', suggestionsRoute);
app.use('/datatypes', dataTypesRoute);

//* App Routes
app.use('/app/user', appUsersRouter);
app.use('/app/categories', appCategoriesRouter);
app.use('/app/apps', appAppsRouter);
app.use('/app/privacy_tips', appPrivacyTipsRoute);
app.use('/app/privacy_laws', appPrivacyLawsRoute);
app.use('/app/suggestion', appSuggestionRoute);
app.use('/app/interesting_news', appInterestingNewsRoute);
app.use('/app/privacy_policy', appPrivacyPolicyRoute);
app.use('/app/dashboard', appDashboardRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.error = err;

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;