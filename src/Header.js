import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';

function Header({ backButton }) {

  const navigate = useNavigate();

  return (
    <div className='header'>

        
          { backButton ? (
              <IconButton onClick={() => navigate('/')}>
                <ArrowBackIosIcon fontSize='large' className='header__icon'></ArrowBackIosIcon>
              </IconButton>
          ): (
              <IconButton>
                <PersonIcon className='header__icon' fontSize='large' />
              </IconButton>
          ) }
          
        
        <Link to="/">
          <img className='header__logo' src={process.env.PUBLIC_URL + '/assets/images/Tinder_logo_PNG3.png'} alt="Tinder logo"/>
        </Link>

        <Link to="/chats">
          <IconButton>
              <ForumIcon className='header__icon' fontSize='large' />
          </IconButton>
        </Link>
    </div>
  )
}

export default Header
