import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NewDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const NewLink = styled(Link)`
  margin: 2%
`;





export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NewDiv>
      <NewLink to='/'>Home</NewLink> 
      <NewLink to='/characters'>Characters</NewLink>
      <NewLink to='/locations'>Locations</NewLink>
      <NewLink to='/episodes'>Episodes</NewLink>
      </NewDiv>
    </header>
  );
}
