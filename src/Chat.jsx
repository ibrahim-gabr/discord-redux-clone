import React, { useEffect } from 'react'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
import { useSelector } from "react-redux";
import db from './firebase'
import firebase from 'firebase'
import {
  setChannel,
  selectChannelId,
  selectChannel,
} from "./features/appSlice";
import { useState } from 'react';
import { selectUser } from './features/userSlice';

function Chat() {

    const [messages , setMessages]  = useState([])
    const channel = useSelector(selectChannel)
    const channelId = useSelector(selectChannelId);
    const user = useSelector(selectUser);
    const [input, setInput] = useState("");

    useEffect(() => {
      if (channelId) {
        db.collection("channels")
          .doc(channelId)
          .collection("messages")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map((doc) => doc.data()));
          });
      }
    }, [channelId]);

    const handleSubmit = (e) => {
        e.preventDefault()
        db.collection("channels").doc(channelId).collection("messages")
            .add({
                message: input,
                user: user,
                timestamp:firebase.firestore.FieldValue.serverTimestamp()
            });
        setInput('')
    }

    return (
      <div className="col-span-3 max-h-screen chat relative lg:col-span-4 flex flex-col justify-center ">
        <ChatHeader channelName={channel?.channelName} />
        <div className="chat__messages flex-1 overflow-scroll w-full">
          {messages?.map((message) => (
            <Message user={user} message={message} />
          ))}
        </div>
        <div className="chat__input absolute bottom-0 flex justify-between z-10   bg-gray-700 p-4 w-full">
          <div className="flex-1 flex ">
            <AddCircleIcon className="text-white" />
            <form className="pl-2 flex-1">
              <input
                value={input}
                className="w-full outline-none text-white bg-transparent"
                            placeholder={`message #${channel?.channelName ? channel.channelName : 'channel' }`}
                            type='text'
                onChange={(e) => setInput(e.target.value)}
                disabled={!channelId}
              />
              <button
                type="submit"
                className="hidden"
                onClick={(e) => handleSubmit(e)}
                disabled={!channelId}
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="flex text-white ">
            <CardGiftcardIcon fontSize="Large" />
            <GifIcon fontSize="Large" />
            <EmojiEmotionsIcon fontSize="Large" />
          </div>
        </div>
      </div>
    );
}

export default Chat
