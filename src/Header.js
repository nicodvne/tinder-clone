import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon className='header__icon' fontSize='large' />
        </IconButton>
        
        <img className='header__logo' src={process.env.PUBLIC_URL + '/assets/images/Tinder_logo_PNG3.png'} alt="Tinder logo"/>
        <IconButton>
            <ForumIcon className='header__icon' fontSize='large' />
        </IconButton>
    </div>
  )
}

export default Header
