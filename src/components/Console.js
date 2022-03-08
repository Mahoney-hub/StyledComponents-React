import React from 'react';
import styled from "styled-components";

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  resize: none;
  color: ${({color}) => color || 'white'};

  &:focus {
    outline: none;
  }
`

export const Console = (props) => {
    return <StyledConsole {...props}/>
};

