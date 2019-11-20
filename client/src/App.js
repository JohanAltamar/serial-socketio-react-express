import React, {useEffect, useState} from 'react';
import './App.css';

import openSocket from 'socket.io-client';
// import axios from "axios";

function App() {
  const [data, setData] = useState('');
  // const [packetsSent, setPacket] = useState(1)

  useEffect(()=>{
    const socket = openSocket('http://localhost:8000');
    socket.on('serialData', (barcode)=>{
      setData(barcode);
      //console.log(barcode)
    });

  },[]);
  
  // const handleClick = async (event) => {
  //   const T1 = Date.now();
  //   // console.log(T1);
  //   const ubidots = await axios.get('https://industrial.api.ubidots.com/api/v1.6/devices/dispenser1/random/lv?token=BBFF-ky5WmtGja4bQfCWjpeZ5B6jF2Vde6L');
  //   if(ubidots.status === 200){
  //     const T2 = Date.now();
  //     // console.log(T2);
  //     console.log(ubidots.data);
  //     console.log(`Ubidots Time: ${T2-T1}ms`);
  //   }

  //   const T3 = Date.now();
  //   const adafruit = await axios.get('https://io.adafruit.com/api/v2/Jaltamar12/feeds/medicines-group.dolex/data/last?x-aio-key=700a9ca08b924bf288235f7e6d8d7a6e');
  //   if(adafruit.status === 200){
  //     const T4 = Date.now();
  //     console.log(adafruit.data.value);
  //     console.log(`Adafruit Time: ${T4-T3}ms`);
  //   }
  // }
  // const postUbidots = async (event) =>{
  //   event.preventDefault();
  //   axios.post('https://industrial.api.ubidots.com/api/v1.6/devices/dispenser1?token=BBFF-ky5WmtGja4bQfCWjpeZ5B6jF2Vde6L',{
  //     "random": packetsSent
  //   })
  //   console.log(packetsSent);
  //   setPacket(packetsSent + 1);
    
  // }
  // const postAdafruit = async (event) =>{
  //   event.preventDefault();
  //   axios.post('https://io.adafruit.com/api/v2/Jaltamar12/feeds/random/data?x-aio-key=700a9ca08b924bf288235f7e6d8d7a6e', {
  //     value: packetsSent});
  //   console.log(packetsSent);
  //   setPacket(packetsSent + 1);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Barcode is: {data.value}</h1>
        {/* <button onClick={handleClick}> Test Ubidots </button>
        <button onClick={postUbidots}> Post Ubidots</button>
        <button onClick={postAdafruit}> Post Adafruit </button> */}
      </header>
    </div>
  );
}

export default App;
