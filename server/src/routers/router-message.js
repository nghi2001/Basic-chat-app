import Route from 'koa-router';
import Message from '../models/mongo/message';
import Room from '../models/mongo/room';
import {verifyToken} from '../middlewares/jwt-verify';
import { renderErr} from './helper';
import { renderCondition } from '../controllers/message';
import SocketService from '../services/socket';

const route = new Route();

route.get("/v1/message", verifyToken, async (ctx, next) => {
    let idUser = ctx.state.user.id;
    let condition = await renderCondition(ctx.query);
    if(ctx.query.room_id) {
        let room = await Room.findOne({
            id: ctx.query.room_id,
            members: {
                "$elemMatch": {
                    user_id: idUser
                }
            }
        })
        if(!room) {
            return renderErr("Get List Message", ctx, 403, "room_id");
        }
    } else {
        return ctx.body = []
    }
    let data = await Message.find(condition).populate("user_id","_id name");
    ctx.body = data;
})
route.post("/v1/message", verifyToken, async (ctx, next) => {
    let user_id = ctx.state.user.id;
    let {
        room_id,
        message
    } = ctx.request.body;
    let room = await Room.findById(room_id);
    if(!room) {
        return renderErr("create message", ctx, 404, "room_id");
    }
    let newMessage = await Message.create({
        room_id: room_id,
        user_id: user_id,
        message: message
    })
    let data = await Message.findById(newMessage._id).populate("user_id")
    SocketService.newMessage(data, room_id);
    ctx.body = data
})

route.delete("/v1/message/:id", verifyToken, async (ctx, next) => {
    let result = await Message.deleteOne({_id: ctx.params.id});
    return result
})
export default route