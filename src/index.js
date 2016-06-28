import http from 'http';
import * as util from './util.js';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(util.getHello() + ' World\n');
}).listen(3000, '127.0.0.1');

console.log('Server running...');
