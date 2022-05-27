const Koa = require('koa')
const router = require('./router')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

const port = parseInt(process.env.PORT) || 4000

app.use(bodyParser())
app.use(router.routes())

app.listen(port)
