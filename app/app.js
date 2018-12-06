import express from 'express';
import apiRouter from './api/api';
import createError from 'http-errors';
import expressJwt from 'express-jwt';
import axios from 'axios';
import bodyparser from 'body-parser';



const app = express();

const jwtCheck = expressJwt({
    secret: process.env.APP_AUTH_SECRET,
    audience: 'https://localhost',
    issuer: "https://slackdemo.auth0.com/"
  });

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use('/login', (req, res, next) => {
    axios
        .post('https://slackdemo.auth0.com/oauth/token', {
            "client_id":process.env.APP_CLIENT_ID,
            "client_secret": process.env.APP_CLIENT_SECRET,
            "audience":"https://localhost",
            "grant_type":"client_credentials"
        })
        .then((response) => {
            
            const access_token = response.data.access_token
            res.json({
                access_token
            });
        })
        .catch((err) => {
            res.sendStatus(500);
        });
    
    
});

app.use(jwtCheck);
app.use('/api/v1/', apiRouter);

app.use(function (req, res, next) {
    next(createError(404, "API route not found!! please check api route again."));
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