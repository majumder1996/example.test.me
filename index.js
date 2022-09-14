var Express = require('express');
var bodyParser = require('body-parser');
var app = Express();
var api = require('./api');
var logs = require('./logging');

let date_ob = new Date();

var PORT = 3001;

app.listen(PORT, () => {
    logs(date_ob+" Dugga dugga server initiated on PORT: "+PORT);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api',api);