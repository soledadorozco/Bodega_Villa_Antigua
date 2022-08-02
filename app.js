var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config(); //para que cargue los datos del archivo .env
var session = require('express-session');

var indexRouter = require('./routes/index');
var quienes_somosRouter = require('./routes/quienes_somos'); //routes/quienes_somos.js
var nuestros_viñedosRouter = require('./routes/nuestros_viñedos'); //routes/nuestros_viñedos.js
var nuestros_vinosRouter = require('./routes/nuestros_vinos'); //routes/nuestros_vinos.js
var galeriaRouter = require('./routes/galeria'); //routes/galeria.js
var novedadesRouter = require('./routes/novedades'); //routes/novedades.js
var contactoRouter = require('./routes/contacto'); //routes/contacto.js
var loginRouter = require('./routes/admin/login'); //routes/admin/login.js
var adminRouter = require('./routes/admin/novedades'); // rutes/admin/novedades.js

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:'sdhjdksjdsajfrhajfjafafa25467',
  cookie:{MaxAge:null},
  resave:false,
  saveUninitialized:true
}))

secured = async(req,res,next) => {
  try{
    console.log(req.session.id_usuario);
    if (req.session.id_usuario) {
      next();
    } else{
      res.redirect('/admin/login')
    }
  }catch(error) {
    console.log(error)
  }
}

app.use('/', indexRouter);
app.use('/quienes_somos', quienes_somosRouter);
app.use('/nuestros_viñedos', nuestros_viñedosRouter);
app.use('/nuestros_vinos', nuestros_vinosRouter);
app.use('/galeria', galeriaRouter);
app.use('/novedades', novedadesRouter);
app.use('/contacto', contactoRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/novedades', secured, adminRouter);

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
