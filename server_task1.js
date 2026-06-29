const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    res.setHeader('Content-Type', 'text/plain');

    if (url === '/') {
        res.statusCode = 200;
        res.end('Home Page.');
    } else if (url === '/about') {
        res.statusCode = 200;
        res.end('About Page.');
    } else if (url === '/contact') {
        res.statusCode = 200;
        res.end('Contact Page.');
    } else {
        res.statusCode = 404;
        res.end('Invalid Request!');
    }
});

server.listen(5000, () => {
    console.log('The NodeJS server on port 5000 is now running....');
});