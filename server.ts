import http from 'http';
import fs from 'fs';

interface ResFuncInterface {
  err: NodeJS.ErrnoException | null;
  data: Buffer;
  res: http.ServerResponse;
  req: http.IncomingMessage;
  mimetype: string;
}

const getMimetype = (req: http.IncomingMessage) => {
  let mimetype = 'text/plain';
  if (req?.url) {
    const dotOffset = req.url.lastIndexOf('.');
    if (dotOffset !== -1) {
      switch (req.url.substr(dotOffset)) {
        case '.html':
          mimetype = 'text/html';
          break;
        case '.ico':
          mimetype = 'image/x-icon';
          break;
        case '.jpg':
          mimetype = 'image/jpeg';
          break;
        case '.png':
          mimetype = 'image/png';
          break;
        case '.gif':
          mimetype = 'image/gif';
          break;
        case '.svg' || '.xml':
          mimetype = 'image/svg+xml';
          break;
        case '.css':
          mimetype = 'text/css';
          break;
        case '.js':
          mimetype = 'text/javascript';
          break;
        default:
          break;
      }
    }
  }
  return mimetype;
};

const getResponse = ({ err, data, res, req, mimetype }: ResFuncInterface) => {
  if (!err) {
    res.setHeader('Content-type', mimetype);
    res.end(data);
    console.log(req.url, mimetype);
  } else {
    console.log(err);
    res.end();
  }
};

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const mimetype = 'text/html';
    fs.readFile('./index.html', (err, data) => getResponse({ err, data, res, req, mimetype }));
  } else {
    const mimetype = getMimetype(req);
    fs.readFile(`./${req.url}`, (err, data) => getResponse({ err, data, res, req, mimetype }));
  }
});

server.listen(8080, () => console.log('✔success: http://localhost:8080'));
server.on('error', (err: Error) => console.warn(err));
