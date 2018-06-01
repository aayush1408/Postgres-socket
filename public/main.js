let socket  =  io.connect('http://localhost:4000');

var time = document.getElementById('time');

//Listen for the emits
socket.on('update',(data)=>{
    time.innerHTML = data;
});