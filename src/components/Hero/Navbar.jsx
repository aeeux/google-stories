import React from "react";
import { Button, IconButton } from '@material-ui/core';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import { logo__google } from "../../data";

import './style.scss';

export default function Nav() {
  return (
    <div className="Nav_container">

      <NavContainer>
        <IconButton>
          <MenuIcon />
        </IconButton>
          <h1>Web Stories on 
          <img className="logo__google" src={logo__google} width="110" height="110" />
          </h1>
          <p>by Andreas Eriksen</p>
      </NavContainer>
      
      <div className="Nav_container">
      
      <IconsContainer>
        <SidebarButton
        style={{textTransform: 'none'}}
        >Create a story</SidebarButton>
      </IconsContainer>
      
      </div>
    
    </div>
  );
}

const NavContainer = styled.div`
        display: flex;
        top: 0;
        background-color: white;
        z-index: 1;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        height: 80px;
        border-bottom: 1px solid whitesmoke;
    `;

const IconsContainer = styled.div`

    `;

const SidebarButton = styled(Button)`
        width: 100%;
        height: 48px;
        min-width: 98px;
        top: 5px;
        &&&{
            background-color: #1a73e8;
            font-family: Google Sans Display, "sans-serif";
            color: whitesmoke;
            font-size: 16px;
          }
    `;