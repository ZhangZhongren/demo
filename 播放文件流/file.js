// 引入模块
const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const router = require('koa-router')();
const koaBody = require('koa-body');


// 实例化
const app = new Koa();
app.use(require('./cors/index'))
app.use(koaBody());
 
router.get('/', async (ctx) => {
  ctx.type = 'audio/mp3'
  let data = fs.readFileSync(path.join(__dirname, './2.mp3'))
  // console.log(data)
  // const pathUrl = path.join(__dirname, './2.mp3');
  ctx.body = data;
});
 
 
// 启动路由
app.use(router.routes()).use(router.allowedMethods());
 
// 监听端口号
app.listen(3001, () => {
  console.log('server is listen in 3001');
});