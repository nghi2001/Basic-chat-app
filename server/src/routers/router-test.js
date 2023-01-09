import Route from 'koa-router';

const route = new Route();
route.get("/", (ctx) => {
    ctx.body = "Hello"
})
export default route