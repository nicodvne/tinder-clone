import React, { useState } from 'react'
import './Chatscreen.css'
import  Avatar  from '@mui/material/Avatar'


const ChatScreen = () => {

    const [messages, setMessages] = useState([
        { // messages from the other user
            name: "Ellen",
            image: '...',
            message: 'Whats up'
        },
        {
            name: "Ellen",
            image: '...',
            message: 'Hows it going'
        }, // messages from the current user
        {
            message: 'Whats up'
        },
    ])

    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>You matched with Ellen on 10/08/20</p>

            { messages.map(message => (
                message.name ? (
                    <div className='chatScreen__message'>
                        <Avatar className='chatScreen__image' alt={message.name} src={message.image}/>
                        <p className='chatScreen__text'>{message.message}</p>
                    </div>
                ) : 
                (
                    <div>
                        <div className='chatScreen__message'>
                            <p className='chatScreen__textUser'>{message.message}</p>
                        </div>

                    </div>
                )
                
            )) }
            
        </div>
    )
}

export default ChatScreen