const express = require('express');
const request = require('request');
const app = express();

app.get('/repos/:user', (req, res) => {

    var user = req.params.user;
    var listUserRepos = 'https://api.github.com/users/'+user+'/repos';
    
    var options = {
        url: listUserRepos,
        headers: {
            'User-Agent': 'request'
        }
    }

    function callback(err, response, body) {
        if(err) {
            console.log("Error: ", err);
        }
        var data = JSON.parse(body);
        res.json(data);
    }
    request(options, callback);
});

app.get('/issues/:repo', (req, res) => {

    var user = 'nodejs';
    var repo = req.params.repo;
    var issues = 'https://api.github.com/repos/'+user+'/'+repo+'/issues';

    var options = {
        url: issues,
        headers: {
            'User-Agent': 'request'
        }
    }

    function callback(err, response, body) {
        if(err) {
            console.log("Error: ", err);
        }
        var data = JSON.parse(body);
        res.json(data);
    }
    request(options, callback);
});

app.get('/', (req, res) => {
    res.send('hello world');
});

const port = 5000;
app.listen(port, () => {
    console.log('server running on port: ', port);
})