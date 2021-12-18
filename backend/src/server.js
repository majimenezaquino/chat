const express = require("express");
const {PORT}=require("./config")
const  database = require("./config/database")
const cors = require('cors')
const app = express()
const http = require("http").Server(app)

app.use(cors())
const io = require('socket.io')(http,{
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });
const SchemaMEssage = require("./models/SchemaMEssage")
app.use(express.json());
database.connect()


app.get("/message", async (req,res)=>{
    const  messages=  await SchemaMEssage.find()
   res.json(messages)
})
app.post("/message",(req,res)=>{
    console.log(req.body)
    const message = SchemaMEssage(req.body)
    message.save()
 res.json({message: "Messsage save"})
})


http.listen(PORT, ()=>{
console.log("connected to port: "+ PORT)
});

//socket 
io.on('connection', (socket) => { 
    socket.on("addmessage",(mess)=>{
        const message = SchemaMEssage(mess)
        message.save()
        socket.broadcast.emit('updatemessage', null);
    })
    
    socket.emit('connection', null);
});