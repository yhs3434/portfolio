const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const techRouter = require('./routes/tech');
const diaryRouter = require('./routes/diary');
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');

dotenv.config();
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tech', techRouter);
app.use('/diary', diaryRouter);
app.use('/auth', authRouter);


// admin page
app.use((req, res, next) => {
  if (req.url.includes('admin')) {
    console.log(req.cookies);
    console.log('req cookie session', req.cookies.session);
    console.log('req cookie session2', req.cookies.session2);
  }
  next();
})
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
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
