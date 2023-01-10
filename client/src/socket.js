import * as socketIO from 'socket.io-client';
import config from './config/config.json';
let token = localStorage.getItem("accessToken");

const socket = socketIO.connect(config.socket, {
    auth: {
        token: `${token}`
    }
})
export {
    socket
}