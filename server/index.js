const http = require('http');
//const
//let
//var


const server = http.createServer((req,res) =>{
    res.end('Hello World\n');
})

server.listen(4242, () => {
    console.log('Server is running...');
})