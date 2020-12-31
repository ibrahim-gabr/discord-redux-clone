import React from 'react'
import { useDispatch } from "react-redux";
import {
  setChannel,
  selectChannelId,
  selectChannelName,
} from "./features/appSlice";
function SidebarChannel({ channel, id }) {

     const dispatch = useDispatch()
    const handleSelectChannel = () => {
         dispatch(
           setChannel({
             id,
             channel: channel
           })
         );
    }

    return (
        <div className='sidebar__channel my-2 flex pl-4 flex-1 hover:text-white hover:bg-gray-600 text-lg py-3' onClick={handleSelectChannel}>
            <span className=' '>#</span>
            <h3 className='pl-2'>{channel.channelName}</h3>
        </div>
    )
}

export default SidebarChannel
