var createError = require('http-errors');
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '')));

app.use('*', (req, res) => {
	res.sendFile(express.static(path.join(__dirname, 'index.html')));
})

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

app.listen(process.env.PORT, () => {
	console.log(`Listening on port: ${process.env.PORT}`);
});

module.exports = app;
