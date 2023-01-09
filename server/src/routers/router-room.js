import Route from 'koa-router';
import User from '../models/mongo/user';
import {verifyToken} from '../middlewares/jwt-verify';
import {
    renderErr
} from './helper';
import {
    cfg
} from '../config';
import Room from '../models/mongo/room';
import {renderCondition} from '../controllers/room';
const route = new Route();

route.get("/v1/rooms/:id", async (ctx, next) => {
    let id = ctx.params.id;
    let data = await Room.findById(id)
    ctx.body = data
})
route.get("/v1/rooms", async (ctx) => {
    let conditon = await renderCondition(ctx.query);
    let data = await Room.find(conditon);
    ctx.body = data
})
route.post("/v1/rooms", verifyToken,async (ctx, next) => {
    let {
        members,
        name
    } = ctx.request.body;
    let users = await User.find({
        _id: {
            "$in": members
        }
    }).select([
        "_id"
    ])
    members = [];
    for(let user of users) {
        members.push({
            user_id: user._id
        })
    }
    let data = await Room.create({
        name: name,
        members
    });
    ctx.body = data;
})
// route.put("/v1/rooms/:id", verifyToken, async (ctx, next) => {
//     let {
//         name,
//         members
//     } = ctx.request.body;
//     let id = ctx.params.id;
//     let room = await Room.findById(id);
//     if(!room) {
//         return renderErr("Update room", ctx, 404, "id");
//     }
    
// })
export default route