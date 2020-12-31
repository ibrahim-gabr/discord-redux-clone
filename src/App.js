import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Chat from './Chat';
import { loginUser,logout , selectUser } from './features/userSlice';
import Login from './Login';
import Sidebar from './Sidebar';
import {auth} from './firebase'

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
     
      if (authuser) {
        dispatch(loginUser({
          uid: authuser.uid,
          photo: authuser.photoURL,
          email: authuser.email,
          displayName:authuser.displayName
        }))
      } else {
        dispatch(logout())
      }
    })
  
  }, [dispatch])

  return (
    <>
      {user ?   <div className="app grid grid-cols-5 bg-gray-800 ">
              <Sidebar />
              <Chat />
      </div> 
        :
      <Login />
    }
      </>
  
  

    
  );
}

export default App;
