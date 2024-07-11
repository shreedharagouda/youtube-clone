import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';

const ChatMessage = ({name,message}) => {

    
  return (
    
    <div className="flex items-center shadow-sm p-2">
        <img
        className="h-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className="font-bold px-2">{name}</span>
      <span className="font-normal">{message}</span>
    </div>
  )
}

export default ChatMessage;