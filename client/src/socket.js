import * as socketIO from 'socket.io-client';
let token = localStorage.getItem("accessToken");

const socket = socketIO.connect("http://localhost:3000",{
    auth: {
        token: `${token}`
    }
})
export {
    socket
}