/**
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up and down of user link
 * Author: Md. Rafiqul Islam
 * Date: 26/03/21
 *
 *
 */

//Dependencies
const http = require('http');
const url = require('url');

// app object - module scafolding
const app = {};

// app config
app.config = {
    port: 3000
};

// create a server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);

    server.listen(app.config.port, () => {
        console.log(`The server is run ${app.config.port}`);

    });
}




// response handling
app.handleReqRes = (req, res) => {

    // handle request

    //get the parse url
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimPath = path.replace(/^\/+|\/+$/g, '');

    console.log(trimPath);
    res.end("Hello world");


}

// start the server

app.createServer();