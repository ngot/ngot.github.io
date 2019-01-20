const http = require('http');
const path = require('path');

const port = 8000;
const staticFileHandler = http.fileHandler(path.join(__dirname));

const server = new http.Server(port, staticFileHandler);
console.log(`preview server running on http://127.0.0.1:${port}`);
server.run();
