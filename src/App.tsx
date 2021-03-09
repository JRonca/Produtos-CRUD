import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Search from './components/Search';
import List from './components/List';
const App: React.FC = () =>(
  <>
    <Header/>
    <Search/>
    <List/>
    <List/>
    <List/>
    
    <GlobalStyle/>
  </>
);

export default App;
