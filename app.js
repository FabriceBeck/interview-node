
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const index = require('./src/routes/index');

const port = process.env.PORT || 3000;

const app = express();
const http = require('http');
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(cookieParser());
app.use(index);

// The error handler must be before any other error middleware and after all controllers
// Implement

// Catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Development error handler
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        console.log(err.stack);
        res.status(err.status || 500);
        res.send({ message: err.message, error: err });
    });
    app.locals.pretty = true;
}

// Production error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({ message: err.message, error: err });
});

server.listen(port);

