// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
var Router = require('koa-router');
const cors = require('@koa/cors');
const koaBody = require('koa-body');

// 创建一个Koa对象表示web app本身:
const app = new Koa();
var router = new Router();
router.prefix('/api')    // 请求加前缀
router.get('/', (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa3001!</h1>';
});
router.get('/api', (ctx, next) => {  // get请求传递参数
    const params = ctx.request.query;
    console.log(params)
    console.log(params.name,params.age)
    ctx.body = {
        name:params.name,
        age:params.age
    }
});
router.get('/async', async(ctx, next) => {  // 通过async、await实现2s以后将结果返回
   let result = await new Promise((resolve) =>{
       setTimeout(function(){
        resolve('hello world 2s later!')
       },2000)
   })
   ctx.body = result
});
router.post('/loginapi', async(ctx) => {   // post 请求
    let { body } = ctx.request
    console.log(ctx.request.body);
    // => POST body
    ctx.body = {...body};
  }
);
app.use(koaBody());
app.use(cors());
app
    .use(router.routes())
    .use(router.allowedMethods());
// 在端口3000监听:
app.listen(3001);
console.log('app started at port 3000...');