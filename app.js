const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors({origin: '*', methods: '*'}));
app.use((req, res, next) => {
    bodyParser.json()(req, res, err => {
        if (err) return res.status(400).json({"status": false, "message": 'Invalid JSON body passed, recheck you JSON body for errors'});
        next();
    });
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//setup routes here.
app.use('/student', require('./routes/v1/api.routes'));

app.all('*', (req, res) => {
    return res.status(404).json({"status": false, "message": 'Endpoint not found or configured'});
})

module.exports = app;