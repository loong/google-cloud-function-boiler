import http from 'http';
import * as util from './util.js';

// [START helloHttp]
function handleGET (req, res) {
  // Do something with the GET request
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(util.getHello() + ' Long');
}

function handlePUT (req, res) {
  // Do something with the PUT request
  res.writeHead(403, {'Content-Type': 'text/plain'});
  res.end('Forbidden!');
}

/**
 * Responds to a GET request with "Hello World!". Forbids a PUT request.
 *
 * @example
 * gcloud alpha functions call helloHttp
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
export function helloHttp (req, res) {
  switch (req.method) {
    case 'GET':
      handleGET(req, res);
      break;
    case 'PUT':
      handlePUT(req, res);
      break;
    default:
      res.writeHead(500, {'Content-Type': 'application/javascript'});
      res.end(JSON.stringify({error: "Something blew up!"}));
      break;
  }
};
