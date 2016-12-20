import Router from 'koa-router'
import { upload } from './../helper'

const dbTypes = new Router({
  prefix: '/data'
})

dbTypes
  .get('/json', ctx => {
    ctx.body = {
      columnChart : {
        chart: {
          renderTo: 'container',
          type: 'column',
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
          }
        },
        title: {
          text: 'Chart rotation demo'
        },
        subtitle: {
          text: 'dbTypes options by dragging the sliders below'
        },
        plotOptions: {
          column: {
            depth: 25
          }
        },
        series: [{
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
      }
    }
  })
  .get('/', ctx => {
    ctx.body = 'this is dbTypes page!'
  })
  .post('/post', ctx => {
    ctx.body = ctx.request.body
  })
  .post('/file', upload.single('avatar'), async ctx => {
    ctx.body = ctx.req.file
  })
  .post('/files', upload.any(), async ctx => {
    ctx.body = ctx.req.files
  })

export default dbTypes
