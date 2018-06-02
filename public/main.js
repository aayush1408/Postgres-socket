let socket  =  io.connect('http://localhost:4000');

var time = document.getElementById('time');
var table = document.getElementById('table');

for(var i=0;i<10;i++){
    var row = table.insertRow(i);  
    var id = row.insertCell(0);
    var color = row.insertCell(1);
}
//Listen for the emits
socket.on('update',(data)=>{
    data.map((i,key)=>{
        console.log(table.rows[key].getElementsByTagName("td"));
        table.rows[key].getElementsByTagName("td")[0].innerHTML = i.equip_id;
        table.rows[key].getElementsByTagName("td")[1].innerHTML = i.color;
    })  
});