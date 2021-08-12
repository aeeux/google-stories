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
          <img className="logo__google" src={logo__google} width="100" height="100" />
          </h1>
          <IconsContainer>
            <MainButton className="btn__main"
              style={{textTransform: 'none'}}
              >Create a story</MainButton>
          </IconsContainer>
      </NavContainer>
      
      <div className="Nav_container">
      
      <IconsContainer>
        <MainButtonMobile className="btn__main_mobile"
        style={{textTransform: 'none'}}
        >Create a story</MainButtonMobile>
      </IconsContainer>
      
      </div>
    
    </div>
  );
}

const NavContainer = styled.div`
        position: fixed;
        display: flex;
        top: 0;
        background-color: white;
        z-index: 1;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        padding: 12px 8px;
        height: 40px;
        border-bottom: 1px solid whitesmoke;
    `;

const IconsContainer = styled.div`

    `;

const MainButton = styled(Button)`
        height: 48px;
        top: 0px;
        &&& {
          background-color: #1a73e8;
          margin-right: 20px;
            background-color: #1a73e8;
            font-family: Google Sans Display, "sans-serif";
            color: whitesmoke;
            font-size: 16px;
            padding: 0px 24px 0px;
          }12
    `;

const MainButtonMobile = styled(Button)`
        width: 100%;
        height: 48px;
        top: 70px;
        &&&{
            background-color: #1a73e8;
            font-family: Google Sans Display, "sans-serif";
            color: whitesmoke;
            font-size: 16px;
          }
    `;