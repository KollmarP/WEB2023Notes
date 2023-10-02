const http = require('http');
const express = require('express');
const app = express();

const PORT = 3000;
//let
//var

app.get('/', (req, res) => {
    res.send('Hello World');
})

const server = http.createServer((req,res) =>{
    res.end('Hello World\n');
})

console.log('1: Trying to start server...');

server.listen(PORT, () => {
    console.log('2: Server is running at http://localhost:${PORT}');
})

console.log("3: End of file, waiting for results...");