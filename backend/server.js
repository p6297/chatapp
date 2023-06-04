const app= require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server,{
    cors: {
        origin: "*",
        
      }
});

const PORT = process.env.PORT || 5000;

//establishig the connection here....
io.on("connection",(socket)=> {
    console.log(`socket is: ${socket}`);
    console.log(`socket is now active to be connected`);

    //creating an event
    socket.on("chat",(payload)=> {
        console.log(`what is payload: ${payload}`);
        io.emit("chat",payload); //emitting on the event
    })
})


server.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));