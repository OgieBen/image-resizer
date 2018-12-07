import app from '../app';
import http from 'http';

const port = process.env.PORT || 3000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening)


/**
 * Error handler for our server
 * @param {Error} error 
 * @throws {Error}
 */
function onError(error){
    if(error.syscall != 'listen'){
        throw error;
    }
}


/**
 * A simple function that displays feedback to user
 * 
 */
function onListening(){
    console.log("Server is listeneing on port: " + server.address().port);
}
