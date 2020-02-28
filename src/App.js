import React from "react";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import EpisodesList from './components/EpisodesList';




export default function App() {

  

  

  return (
    <main>
      <Header />
      <Route exact path='/'>
        <WelcomePage />
      </Route>
      <Route path='/characters'>
        <CharacterList />
      </Route>
      <Route path='/locations'>
        <LocationsList />
      </Route>
      <Route path='/episodes'>
        <EpisodesList />
      </Route>
    </main>
  );
};