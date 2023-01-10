import Koa from 'koa';
import routers from './routers';
import bodyParser from 'koa-bodyparser';
import {
    cfg
} from './config'
import routeLog from './middlewares/route-log';
import whiteListOrigin from './middlewares/white-list-origin'
import db from './models/mongo/db'
import socket from 'socket.io'
import http from 'http'
import SocketService from './services/socket';
import {
    verifyTokenSocket
} from './middlewares/jwt-verify';
import {
    createClient
} from 'redis';
import {
    createAdapter
} from '@socket.io/redis-adapter';
const app = new Koa();
console.log(`redis://${cfg("REDIS_HOST")}:${cfg("REDIS_PORT")}`);
const pubClient = createClient({
    url: `redis://${cfg("REDIS_HOST")}:${cfg("REDIS_PORT")}`
});
const subClient = pubClient.duplicate();
Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
        app
            .use(whiteListOrigin)
            .use(routeLog)
            .use(bodyParser({
                extendTypes: ['application/json'],
                onerror: function (err, ctx) {
                    ctx.throw('Body parse error', 422);
                }
            }))
            .use(routers)

        const server = http.createServer(app.callback())
        const io = socket(server, {
            cors: {
                origin: "*",
                methods: ["GET", "POST"]
            }
        })

        io.adapter(createAdapter(pubClient, subClient))
        global._basedir = __dirname
        global._io = io;
        global._io.use(verifyTokenSocket)
        global._io.on("connection", SocketService.connection.bind(SocketService))

        server.listen(cfg("APP_PORT", parseInt), cfg("APP_HOST", String))

        console.log('Chay thanh cong tren %s:%s', cfg('APP_HOST', String), cfg('APP_PORT', parseInt));
    })
    .catch(err => {
        console.log(err);
    })