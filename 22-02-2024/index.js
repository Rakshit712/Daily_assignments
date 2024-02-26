const http = require("http");


const { user, posts, comments, albums } = require("./userInformation");
function requestHandler(req, res) {
    console.log(req.url);
    switch (req.url) {
        case "/":
            res.writeHead(200);
            res.end("Welcome to home page");
            break;
        case "/users":
            res.setHeader('Content-Type', 'application/json');  // set header for json response type
            res.writeHead(200)

            res.end(JSON.stringify(user));
            break;
        case "/posts":
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(posts));
            break;
        case "/comments":
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(comments));
            break;
        case "/albums":
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(albums));
            break;
        default:
            res.writeHead(404);
            res.end("Error 404 : Page Not Found");

    }

}

const server = http.createServer(requestHandler)

server.listen(8000, () => { console.log('Listening on port 8000') })

