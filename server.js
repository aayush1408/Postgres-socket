const express = require('express');
const socket = require('socket.io');

const app = express();
app.use(express.static('public'));
const server = app.listen('4000',()=>{
    console.log('Server running at 4000');
});

const io = socket(server);

io.on('connection',(socket)=>{
  setInterval(()=>{
  const date = new Date();      
  socket.emit('update',date);      
  console.log(date);
  },1000);  
})
