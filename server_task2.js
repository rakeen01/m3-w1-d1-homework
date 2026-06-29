const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const url = req.url;
    let filePath = '';

    if (url === '/home' || url === '/') {
        filePath = 'home.html';
    } else if (url === '/about') {
        filePath = 'about.html';
    } else if (url === '/contact') {
        filePath = 'contact.html';
    }

    if (filePath) {
        fs.readFile(path.join(__dirname, filePath), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Invalid Request!');
    }
});

server.listen(5000, () => {
    console.log('The NodeJS server on port 5000 is now running....');
});