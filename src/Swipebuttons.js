import React from 'react'
import './Swipebuttons.css';
import CloseIcon from '@material-ui/icons/Close';
import FavouriteIcon from '@material-ui/icons/Favorite';
import FlashIcon from '@material-ui/icons/FlashOn';
import StarRateIcon from '@material-ui/icons/StarRate';
import { IconButton } from '@material-ui/core';
const  Swipebuttons = () => {
    return (
        <div className="swipeButton">
           <IconButton> <CloseIcon className="swipeButton_close"></CloseIcon></IconButton>
           <IconButton> <FavouriteIcon className="swipeButton_fav"></FavouriteIcon></IconButton>
           <IconButton> <FlashIcon className="swipeButton_flash"></FlashIcon></IconButton>
           <IconButton>  <StarRateIcon className="swipeButton_star"></StarRateIcon></IconButton>
        </div>
    )
}
export default Swipebuttons;