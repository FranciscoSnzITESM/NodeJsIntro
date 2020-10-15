const http = require('http');
const express = require('express');
const hostname = '127.0.0.1';
const port = 3000;

const app = express();
const server = http.createServer(app);

const router = require('./services/router');
app.use("/api", router);

app.get("/", (req, res) => {
    res.end("Hello World");
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});