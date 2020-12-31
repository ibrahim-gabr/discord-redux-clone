import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import db, { auth } from "./firebase";
import SidebarChannel from "./SidebarChannel";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SettingsIcon from "@material-ui/icons/Settings";
import MicIcon from "@material-ui/icons/Mic";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PhoneIcon from "@material-ui/icons/Phone";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import {useDispatch} from 'react-redux'
import {
  setChannel,
  selectChannelId,
  selectChannel,
} from "./features/appSlice";

function Sidebar() {
  const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);
    const dispatch = useDispatch()
    
  const handleAddChannel = () => {
    const channelName = prompt("Please Enter channel name : ");
    db.collection("channels").add({
      channelName,
    });
  };
  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      );
   
    });
  }, []);
  return (
    <>
      <div className="sidebar sticky top-0  flex flex-col col-span-2 lg:col-span-1 h-screen bg-gray-900">
        <div className="sidebar__top text-white flex justify-between  p-4 border-gray-600 border-b-2">
          <h3>Clever Programmer</h3>
          <span className="sidebar__top__icon ">
         <ExpandMoreIcon />
          </span>
        </div>
        <div className="sidebar__channels flex-1">
          <div className="sidebar__channelheaders text-gray-500 flex justify-between p-4">
            <ExpandMoreIcon />
            <h3>Text Channels</h3>
            <AddIcon onClick={handleAddChannel} />
          </div>
          <div className="sidebar__channellists text-gray-500 flex flex-col justify-items-start">
            {channels.map(({ id, channel }) => (
              <SidebarChannel key={id} id={id} channel={channel} />
            ))}
          </div>
        </div>

        <div className="sidebar__voice flex justify-between items-center border-t-2 border-b-2 border-gray-500 text-green-500 h-32 px-2 py-1">
          <div className="mr-1">
            <SignalCellularAltIcon />
          </div>
          <div className="flex flex-col ">
            <h3>Voice Connected</h3>
            <p className="text-gray-600">Stream</p>
          </div>
          <div className="flex flex-col ml-1">
            <InfoOutlinedIcon />
            <PhoneIcon />
          </div>
        </div>

        <div className="sidebar__profile h-32 flex justify-between p-2 items-center">
          <Avatar
            src={user.photo}
            onClick={() => auth.signOut()}
            className="mr-1"
          />

          <div className="text-white text-base">
            <h3>@{user.displayName}</h3>
            <p>#ThisisMyId</p>
          </div>
          <div className="flex justify-evenly flex-col items-center text-gray-600 ml-1">
            <MicIcon />
            <SettingsIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
