import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  fs.readFile(`./${req.url}`, (err, data) => {
    if (!err) {
      const dotOffset = req.url.lastIndexOf('.');
      const mimetype =
        dotOffset === -1
          ? 'text/plain'
          : {
              '.html': 'text/html',
              '.ico': 'image/x-icon',
              '.jpg': 'image/jpeg',
              '.png': 'image/png',
              '.gif': 'image/gif',
              '.svg': 'image/svg+xml',
              xml: 'image/svg+xml',
              '.css': 'text/css',
              '.js': 'text/javascript',
            }[req.url.substr(dotOffset)];
      if (mimetype) {
        res.setHeader('Content-type', mimetype);
        res.end(data);
      }
      console.log(req.url, mimetype);
    } else {
      console.log(err);
      res.end();
    }
  });
});

server.listen(8080, () => console.log('✔success: http://localhost:8080'));
server.on('error', (err: Error) => console.warn(err));
