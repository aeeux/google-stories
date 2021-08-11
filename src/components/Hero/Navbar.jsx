import React from "react";
import { Button} from '@material-ui/core';
import styled from 'styled-components';

export default function Nav() {
  return (
    <div className="hero-usedBy">
      <IconsContainer>
        <SidebarButton>Start a new chat</SidebarButton>
      </IconsContainer>
    </div>
  );
}

const IconsContainer = styled.div`

    `;

const SidebarButton = styled(Button)`
        width: 100%;
        &&&{
            border-top: 1px solid whitesmoke;
            border-bottom: 1px solid whitesmoke;
        }
    `;