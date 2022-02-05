const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    // console.log(req); # To see the request header information
    console.log(req.url);
    res.end('200');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000.');
});