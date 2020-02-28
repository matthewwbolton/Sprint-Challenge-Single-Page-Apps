import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Link to='/'>Home</Link> 
      <Link to='/characters'>Characters</Link>
      <Link to='/locations'>Locations</Link>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        
      </header>
    </section>
  );
}