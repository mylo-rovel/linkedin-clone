import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@mui/material';

function HeaderOption({Icon, title, AvatarSrc, onClickFn}) {
    const IconDisplay = (Icon) ? <Icon className='headerOption__icon'/> : null;
    const AvatarDisplay = (AvatarSrc) ? <Avatar id='headerOption__avatarIcon' src={AvatarSrc} className='headerOption__icon'/> : null;
    return (
        <div onClick={onClickFn} className='headerOption'>
            { IconDisplay }
            { AvatarDisplay }
            <h3 className='headerOption__title'>{title}</h3>
        </div>
    );
}

export default HeaderOption;