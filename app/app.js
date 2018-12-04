import express from 'express';
import apiRouter from './api/api';
import createError from 'http-errors';
import path from 'path';



const app = express();

app.use('/api/v1/', apiRouter);

app.use(function (req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });



export default app;