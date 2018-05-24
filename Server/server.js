const express = require('express')
const app = express()
const port = parseInt(process.env.PORT, 10) || 8000
const path = require('path')
const cors = require('cors')
const server = app.listen(port, () => console.log(`Listening for requests on port ${port}`))
const io = require('socket.io')(server)
const Domain = require('domain')
var {route,adminToken} = require('./routes')

//Socket.io server
io.on('connection',(socket)=>{
    socket.emit('welcome',"Welcome new user")
    console.log('User has connected')

    socket.on('message',(message)=>{
        socket.broadcast.emit('newMessage',message)
    })

    socket.on("disconnect",()=>{
        console.log('User has disconnected')
    })
})


app.use(cors())
app.use(route)

module.exports = {
    io
}
