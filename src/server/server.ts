import * as http from 'http'
import * as url from "url"
import AppRequestHandler from "./appRequestHandler"
 
class Server {
    private server: any

    constructor() {
        this.server = this.createServer()
    }

    public createServer() {
        return http.createServer((req: any,res: any) => {

            // Parse the url
            let parsedUrl = url.parse(req.url, true);
          
            // Get the path
            let path = parsedUrl.pathname;
            let trimmedPath = path.replace(/^\/+|\/+$/g, '');
          
            // Get the query string as an object
            let queryStringObject = parsedUrl.query;
          
            // Get the HTTP method
            let method = req.method.toLowerCase();
          
            //Get the headers as an object
            let headers = req.headers;
          
            // handle the request
            const responseData = AppRequestHandler
                .handle(trimmedPath, queryStringObject, method, headers)

            // Send the response
            res.writeHead(responseData.statusCode, responseData.headers)
            res.end(responseData.payload)
          
            // Log the request/response
            // console.log('Request received with these headers: ',headers);
          });
    }

    public listen(port: number, callback: Function) {
        this.server.listen(port, callback);
    }
}

const server = new Server()
export default server
