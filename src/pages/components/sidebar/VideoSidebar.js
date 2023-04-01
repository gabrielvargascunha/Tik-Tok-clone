import React, { useState } from 'react'
import "./videoSidebar.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

function VideoSidebar({likes, messages, shares}) {
    const[liked, setLiked]= useState(false)
    function handdelike(){
        setLiked(!liked)

    }
  return (
    <div className='videoSidebar'>
        <div 
        className='videoSdebar__options'
        onClick={handdelike}
        >
            {liked ?<FavoriteIcon fontSize='large'/> : <FavoriteBorderIcon fontSize='large'/>}
            <p>{liked ? likes + 1 : likes} </p>
        </div>
        <div className='videoSdebar__options'>
          <ChatIcon fontSize='large'/>
            <p>{messages}</p>
        </div>
        <div className='videoSdebar__options'>
           <ShareOutlinedIcon fontSize='large'/>
            <p>{shares}</p>
        </div>
    </div>
   
  )
}

export default VideoSidebar