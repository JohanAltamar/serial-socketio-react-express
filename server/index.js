const express = require('express');
const socketIo = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIo.listen(server);

io.on('connection', (socket)=>{
  console.log('A new socket connected');
})

//----------- SERIAL COMMUNICATION ---------------------
const SerialPort = require('serialport');
const ReadLine = SerialPort.parsers.Readline;
const parser = new ReadLine();

mySerial = new SerialPort('COM5',{
  baudRate: 9600
});

mySerial.on('open', ()=>{
  console.log('Opened Serial port');
})

mySerial.on('data', (data)=>{
  //console.log(data.toString());
  io.emit('serialData',{
    value: data.toString()
  })
})

mySerial.on('error', (error)=>{
  console.log(error.message);
})

//--------------------- Server Start ------------------------
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
server.listen(8000, ()=>{
  console.log('Server on port: ', 8000);
})
