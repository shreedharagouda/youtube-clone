import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';



const LiveChat = () => {

  const [liveMessage,setLiveMessage]=useState("");

    const dipatch=useDispatch();
    const chatMessages=useSelector((store)=>store.chat.messages);
    

    useEffect(()=>{
       const i=setInterval(()=>{

        // API polling
        console.log("api polling");
        dipatch(addMessage({
            name:generateRandomName(),
            message:makeRandomMessage(20),
        }))
        },2000);

        return ()=>clearInterval(i);
    },[]);
  return (
    <>
    <div className="w-full h-[500px] ml-2 p-2 border-black font-bold border-2 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
    <div>
    {chatMessages.map((c,i)=>(
        <ChatMessage
        key={i}
        name={c.name}
        message={c.message}
    />
    ))}
    </div>
    </div>
    <form className="w-full p-2 ml-2 border border-b-4"
     onSubmit={(e)=>{
      e.preventDefault();
      dipatch(addMessage({
        name:"shreedhar",
        message:liveMessage,
      }));
      setLiveMessage("");
    }}>
      <input className="w-80 px-2 border border-gray-400 rounded-lg"
       type="text" value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
      <button className="px-2 mx-2 bg-green-200 rounded-lg">Send</button>
    </form>
    </>
    
  );
};

export default LiveChat