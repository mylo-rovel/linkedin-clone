import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';
import './Sidebar.css';

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
    </div>
  );
  
  return (
    <div className='sidebar'>        
        <div className="sidebar__top">
            <img src="https://cdn.britannica.com/64/190464-050-B74E1FD9/view-central-business-district-Melbourne-train-station.jpg" alt="" />
            <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p id='whoViewedYou--p' className="sidebar__statNumber">29,299</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p id='viewsOnPost--p' className="sidebar__statNumber">12,345</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('engineering')}
            {recentItem('sustainability')}
            {recentItem('development')}
            {recentItem('designing')}
        </div>
    </div>
  )
}

export default Sidebar;