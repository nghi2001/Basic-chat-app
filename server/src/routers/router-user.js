import Route from 'koa-router';
import User from '../models/mongo/user';
import bcrypt from 'bcrypt';
import {
    renderErr
} from './helper';
import {
    verifyToken
} from '../middlewares/jwt-verify';
import {
    renderCondition
} from '../controllers/user';   

const route = new Route();

route.get("/v1/users", verifyToken, async (ctx) => {
    let condition = await renderCondition(ctx.query);
    let data = await User.find(condition);
    ctx.body = data;
})

route.post("/v1/users", async (ctx) => {
    let {
        name,
        username,
        password
    } = ctx.request.body;
    let dataInsert = {
        password: bcrypt.hashSync(password, 10),
        username,
        name
    }
    if (username) {
        let checkData = await User.findOne({
            username: username
        })
        if (checkData) {
            return renderErr("create user", ctx, 409, "username");
        }
    }
    let data = await User.create(dataInsert);
    ctx.body = data;

})
export default route