import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import {
    ThumbUpAltOutlined, 
    ChatOutlined, 
    ShareOutlined, 
    SendOutlined
} from '@mui/icons-material';
import InputOption from '../InputOption/InputOption';


const Post = React.forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className="post__header">
                <Avatar src={photoUrl} >{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            
            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlined}  title='like' color='gray' />
                <InputOption Icon={ChatOutlined}  title='comment' color='gray' />
                <InputOption Icon={ShareOutlined}  title='share' color='gray' />
                <InputOption Icon={SendOutlined}  title='send' color='gray' />
            </div>
        </div>
    );
});

export default Post;