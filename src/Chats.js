import React from 'react'
import './Chats.css'
import Chat from './Chat.js'

const Chats = () => {
  return (
    <div classname="chats">

        <Chat name="Sarah"
            message="Hey ! How are you ?"
            timestamp="40 seconds ago"
            profilePic='...'/>

        <Chat name="Noemie"
            message="Yo whats up"
            timestamp="40 seconds ago"
            profilePic='...'/>

        <Chat name="Mathilde"
            message="Hello !"
            timestamp="40 seconds ago"
            profilePic='...'/>

        <Chat name="Albanne"
            message="Morning !"
            timestamp="40 seconds ago"
            profilePic='...'/>

        <Chat name="Emilie"
            message="Yo whats up boy "
            timestamp="40 seconds ago"
            profilePic='...'/>
    </div>
  )
}

export default Chats