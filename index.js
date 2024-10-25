const jsonServer = require('json-server')

const mpServer = jsonServer.create()

const router = jsonServer.router("db.json")
const middleware = jsonServer.defaults()
const port = 3000 || process.env.PORT
mpServer.use(middleware)
mpServer.use(router)

mpServer.listen(port,()=>{
    console.log(`MP Server is started at port ${port} and waiting for client request!!!`);
    
})