require('dotenv').config();
const app = require('./app');

const port = process.env.PORT || 8095;
const http = require('http');

http.createServer(app).listen(port, function (err) {
    if (err) console.log('unable to initialize the server');
    console.log(`server started on http://127.0.0.1:${port}`);
});