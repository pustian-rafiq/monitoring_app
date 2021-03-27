/**
 * Title: Uptime Monitoring Application
 * Description: Control all requests and responses
 * Author: Md. Rafiqul Islam
 * Date: 26/03/21
 *
 */

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');


//module scafolding
const handler = {};


handler.handleReqRes = (req, res) => {

    // handle request

    //get the parse url
    const parsedUrl = url.parse(req.url, true);

    const path = parsedUrl.pathname;
    const trimPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headerObject = req.headers;

    const decoder = new StringDecoder('utf-8');
    let realData = '';
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);



    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        res.end("Hello world");

    });

};

module.export = handler;