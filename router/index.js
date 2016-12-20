import Router from 'koa-router'

const index = new Router()

index
  .get('/', async ctx => {
    // 渲染模板
    await ctx.render('index', { title: '图表数据' })
  })

// 发送静态文件
  .get('/index', async ctx => {
    await ctx.send(ctx, 'index.html', { root: 'static/template' })
  })
  .get('/dashboard', async ctx => {
    await ctx.send(ctx, 'dashboard.html', { root: 'static/template' })
  })

export default index
