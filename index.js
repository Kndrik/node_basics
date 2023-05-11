const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const url = req.url;
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (url === "/") {
        fs.readFile('index.html', (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    } else if (url === "/about") {
        fs.readFile('about.html', (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    } else if (url == "/contact-me") {
        fs.readFile('contact-me.html', (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    } else {
        fs.readFile('404.html', (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    }
}).listen(8080);