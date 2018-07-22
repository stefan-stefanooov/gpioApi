/*
 * Primary file for API
 *
 */

// Dependencies
import server from "./server/server"

// Start the server
server.listen(3003,function(){
  console.log('The server is up and running now');
})
