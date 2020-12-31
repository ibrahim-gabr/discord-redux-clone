import React from 'react'
import SendIcon from '@material-ui/icons/Send';
import HelpIcon from '@material-ui/icons/Help';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
function ChatHeader({channelName}) {
    return (
      <>
        <div className="chat__header absolute w-full top-0 bg-gray-800 z-10 flex px-4 py-4 justify-between ">
          <div className="flex-1 flex">
            <p className="text-gray-600">#</p>
            <h3 className="text-white ml-2 ">{channelName ? channelName : ''}</h3>
          </div>
          <div className="flex text-gray-400 justify-between px-4">
            <div className="flex justify-between px-4">
              <NotificationsIcon />
              <LocationOnIcon />
              <PeopleAltIcon />
            </div>
            <div className="flex  bg-gray-900 px-2">
              <input
                type="text"
                placeholder="Search "
                className="px-1 bg-transparent"
              />
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="flex  justify-between px-2">
              <SendIcon />
              <HelpIcon />
            </div>
          </div>
        </div>
      </>
    );
}

export default ChatHeader
