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
const { handleReqRes } = require('./helpers/handleReqRes');


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
        console.log(`The server is run ${app.config.port}`)

    });
}


// handle request server
app.handleReqRes = handleReqRes


// start the server

app.createServer();