import React from 'react';
import './Widgets.css';
import { Info as InfoIcon } from '@mui/icons-material';
import { FiberManualRecord as FiberManualRecordIcon } from '@mui/icons-material';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>Linkeding News</h2> 
                <InfoIcon/>
            </div>
            {newsArticle('Cloning apps yeah', 'react rocks')}
        </div>
    );
}

export default Widgets;