import React from 'react'
import { auth , provider } from './firebase'
function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message))
    }
    return (
        <div className='grid place-items-center'>
            <img src="./discord.png" alt="" />
            <button onClick={signIn} className='bg-indigo-400 text-white px-16 py-2 text-xl hover:bg-indigo-700'>Login</button>
        </div>
    )
}

export default Login
