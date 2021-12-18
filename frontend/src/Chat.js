import React,{useState,useEffect} from 'react';
import { ControllerHeader } from './components/ControllerHeader';
import { ControllerMessage } from './components/ControllerMessage';
import { ControllerSend } from './components/ControllerSend';
import {server} from './config'
import socketClient  from "socket.io-client";
const socket = socketClient (server);

export const Chat =()=>{
  const [listMessages, setListMessages] = useState([{message: '', date: new Date()}])
  useEffect(() => {

    const getMessages = async()=>{
      const response = await fetch(`${server}/message`);
      const json = await response.json();
      setListMessages(json)
    }
    const fetchData = async () => {
        try {

          getMessages()
            socket.on('updatemessage', (data)=>{
              getMessages()
              console.log("actualizando mensage",data)
            });
           
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();
}, []);
  
  return (
    <>
      <div className="container-chat">
       <div className="container">
         <div className="header">
          <ControllerHeader />
         </div>
        <div className="container-message">
        <ControllerMessage  messages={listMessages} />
        </div>
        <ControllerSend setMessages={setListMessages} />
       </div>
       
      </div>
    </>
  )
}