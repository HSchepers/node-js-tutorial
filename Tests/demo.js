
const express = require('express');
const app = express();

app.use('/test', function (req, res, next) {
    console.log('Test1');
    next();
});
app.get('/test/test', function (req, res) {
    console.log('Test2');
    res.setHeader('200', { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});

app.listen(3000);

