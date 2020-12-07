import React, { Component } from 'react';
import {Person} from "@material-ui/icons"
import ForumIcon from "@material-ui/icons/Forum"
import './Header.css'
import IconButton from "@material-ui/core/IconButton"

const Header=()=>{

    return(

       <div className="header">

            <IconButton>
           <Person style={{padding:20+"px"}} fontSize="large"></Person>
           </IconButton>
         <img className="logo" src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="Logo"></img>
          <IconButton>
           <ForumIcon style={{padding:20+"px"}} fontSize="large"/>
           </IconButton>
       </div>
    )

}

export default Header;