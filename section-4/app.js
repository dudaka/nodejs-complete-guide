const http = require('http');

// const routes = require('./routes');
const assignment = require('./assignment');

// console.log(routes.someText);
console.log(assignment.someText);

// const server = http.createServer(routes.handler);
const server = http.createServer(assignment.handler);

server.listen(3000);