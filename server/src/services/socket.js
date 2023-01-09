import { verifyTokenSocket } from "../middlewares/jwt-verify";
import Room from '../models/mongo/room';
import _ from 'lodash';
class Socket {
    constructor(){
        this.users = new Map();
        this.roomPrefix = "room:"
    }

    async connection(socket) {
        console.log(`New connection ${socket.id}`);
        let userId = socket.handshake.user.id;
        let rooms = await Room.find({
            members: {
                "$elemMatch": {
                    user_id: userId
                }
            }
        }).select("_id")

        rooms = _.map(rooms,(e) => {
            return this.roomPrefix+e.id
        })
        if(!this.users.get(this.roomPrefix+userId)) {
            let setUser = new Set();
            setUser.add(socket.id);
            this.users.set(this.roomPrefix+userId, setUser)
        } else {
            let setUser = this.users.get(this.roomPrefix+userId);
            setUser.add(socket.id)
            this.users.set(this.roomPrefix+userId, setUser);
        }
        socket.join(this.roomPrefix+userId);
        socket.join(rooms);        
        socket.on("disconnect", () => {
            let setUser = this.users.get(this.roomPrefix+userId);
            if(setUser) {
                setUser.delete(socket.id)
            }
            if(this.users.get(this.roomPrefix+userId) && this.users.get(this.roomPrefix+userId).size <= 0) {
                this.users.delete(this.roomPrefix+userId)
            }
            socket.disconnect(true)
            console.log(`User disconnect id is ${socket.id}`);
        })
        socket.on("new-message", (data) => {
            console.log(data);
        })
    }

    newMessage(data, roomId,userId) {
        _io.to(`${this.roomPrefix}${roomId}`).emit("new-message",data );
    }
}
export default new Socket()