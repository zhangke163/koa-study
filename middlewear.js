// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
const app = new Koa();

const middlewear = function async(ctx,next){
    console.log("this is a middlewear")
    console.log(ctx.request.path)
    next()
}

const middlewear1 = function async(ctx,next){
    console.log("this is a middlewear1")
    console.log(ctx.request.path)
    next()
}

const middlewear2 = function async(ctx,next){
    console.log("this is a middlewear2")
    console.log(ctx.request.path)
    next()
}

app.use(middlewear)
app.use(middlewear1)
app.use(middlewear2)

app.listen(3000)
