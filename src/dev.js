import http from 'http';
import * as gcf from './index.js';

http.createServer((req, res) => {
  gcf.helloHttp(req, res);
}).listen(3000, '127.0.0.1');

console.log('Server running on http://localhost:3000 ...');
