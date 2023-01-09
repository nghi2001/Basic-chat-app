import Route from 'koa-router';
import User from '../models/mongo/user';
import bcrypt from 'bcrypt';
import {
    renderErr
} from './helper';
import fs from 'fs';
import {
    cfg
} from '../config';
import jwt from 'jsonwebtoken';

const route = new Route();


route.post("/v1/login", async (ctx) => {
    let {
        username,
        password
    } = ctx.request.body;
    let user = await User.findOne({
        username: username
    })
    if (!user) {
        return renderErr("Login", ctx, 404, "username");
    }
    let checkPassword = await bcrypt.compareSync(password, user.password);
    if (!checkPassword) {
        return renderErr("Login", ctx, 403, "password")
    }
    let data = {
        id: user._id,
        name: user.name
    }
    const cert = await fs.readFileSync(cfg('JWT_PRIVATE_KEY', String));
    const token = jwt.sign(data, cert, {
        algorithm: 'ES256'
    });

    ctx.body = {
        token,
        userInfo: data
    };
})
export default route