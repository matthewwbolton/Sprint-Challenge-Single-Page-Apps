import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NewHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NewImg = styled.img`
  width: 50%;
  border-radius: 50%;
  
`;

export default function WelcomePage() {
  return (
    <section >
   
      <NewHeader>
        <h1>Welcome to the ultimate fan site!</h1>
        <NewImg
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        
      </NewHeader>
    </section>
  );
}