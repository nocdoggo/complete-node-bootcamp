const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    // console.log(req); # To see the request header information
    console.log(req.url);

    const pathName =  req.url;
    
    if(pathName == '/' || pathName == '/overview') {
        res.end('This is the overview.');
    } else if (pathName == '/product') {
        res.end('This is the product.');
    } else {
        // Respond with the 404 HTTP code
        res.writeHead(404);
        res.end('Page not found.');
    };
    
    // res.end('200');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000.');
});