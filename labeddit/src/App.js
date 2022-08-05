import React from 'react';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import Router from './routes/Router';

export const GlobalStyles = createGlobalStyle`
html{
 
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
}

`


function App() {
  return (
    <div className='App'>
      <GlobalStyles/>
      <Router/>
    </div>
  );
}

export default App;
