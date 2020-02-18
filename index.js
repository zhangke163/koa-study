// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
var Router = require('koa-router');

// 创建一个Koa对象表示web app本身:
const app = new Koa();
var router = new Router();
router.get('/', (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa3001!</h1>';
});
router.get('/api', (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa3001api!</h1>';
});
app
    .use(router.routes())
    .use(router.allowedMethods());
// 在端口3000监听:
app.listen(3001);
console.log('app started at port 3000...');