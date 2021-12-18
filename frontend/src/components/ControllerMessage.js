import React ,{useRef,useEffect}from 'react';

const moment =require('moment')

export const ControllerMessage =({messages})=>{
    const divRref = useRef(null);

    useEffect(() => {
        divRref.current.scrollIntoView(false);
      });
    
  
    
    const getTime=(data)=>{
        return moment(data, "YYYYMMDD").fromNow();
    }
    return(
        <>
        <ul ref={divRref}>
            {
                messages.map(({message, date},index)=>(
                    <li key={index}>
                    <p>
                        {message}
                    <br />
                    <small> {getTime(date)}</small>
                    </p>
                    </li>
                ))
            }
      
         </ul>
        </>
    )
}