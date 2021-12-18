import React, {useState} from 'react';
import axios from 'axios';
import {server} from '../config'
import socketClient  from "socket.io-client";
const socket = socketClient (server);

export const ControllerSend =({setMessages})=>{
  const [state, setstate] = useState('')
  const handlerSubmit=(e)=>{
    e.preventDefault()
    const mess ={
      message : state,
      date: new Date()
    }
    if(state){
      setMessages( mesg=>[ ...mesg,mess])
     //https://majimenezaquino-chat.herokuapp.com/message
      // axios.post(`${server}/message`, mess)
      //   .then(res => {
      //     console.log(res.data);
      //   })
      socket.emit('addmessage', mess);
    }
     
    
    
    setstate('')
    
  }
  const handlerChange=(e)=>{
  
    setstate(e.target.value)

    
  }
    return(
        <>
         <div className='footer'> 
          <form onSubmit={handlerSubmit}>
            <div className='container-send'>
              <button>
              <i className="fas fa-camera"></i>
              </button>
              <input type="text" placeholder='Send a message' value={state} onChange={handlerChange} />
              <button type='submit'>
              <i className="fas fa-paper-plane"></i>
              </button>
            </div>
           
          </form>
         </div>
        </>
    )
}