import React from 'react';
import './Header.css';
import srcCatAvatar from '../../Media/Images/catAvatar.png';
import HeaderOption from '../HeaderOption/HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { selectUser } from '../../features/user/userSlice';


function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logoutOfApp());
    auth.signOut();
  };

  const avatarImgSrc = (user?.photoUrl) ? user?.photoUrl : srcCatAvatar;
  
  return (
    <div className='header'>
        <div className='header__left'>
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="inLogo" />
            
            <div className="header__search">
                <SearchIcon/>
                <input placeholder='Search' type="text" />
            </div>
        </div>


        <div className="header__right">
           <HeaderOption Icon={HomeIcon} title='Home' />
           <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
           <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
           <HeaderOption Icon={ChatIcon} title='Messaging' />
           <HeaderOption Icon={NotificationsIcon} title='Notifications' />
           <HeaderOption onClickFn={logoutOfApp} AvatarSrc={avatarImgSrc} title='Me' />
        </div>
    </div>
  )
};

export {Header};