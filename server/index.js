const http = require('http');

const server = http.createServer();

const io = require('socket.io')(server,{
    cors:{origin:'*'}
});

io.on('connection', (socket)=>{
    console.log('se ha conectado un clientee');

    socket.broadcast.emit('chat_message',{
        usuario:'INFO',
        mensaje:'se ha conectado un nuevo usuario'
    })

    socket.on('chat_message',(data)=>{
        io.emit("chat_message", data);
    })
})

server.listen(3000);