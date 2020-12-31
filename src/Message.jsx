import { Avatar } from '@material-ui/core'
import React from 'react'

function Message({ user, message }) {
    return (
        <div className='messages flex justify-between p-4 w-full '>
            <Avatar src={ user.photo}/>
            <div className='message__info flex flex-col flex-1 pl-3'>
                <div className='flex '>
                    <h4 className='text-white'>{ user.displayName}</h4>
                    <p className='text-gray-400 pl-3'>{
                        new Date(message.timestamp?.toDate()).toUTCString()}</p>
                </div>
                <div className='text-gray-400'>
                    <p>{ message.message}</p>
                </div>
            </div>
        </div>
    )
}

export default Message
