import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Search from './components/Search';
import List from './components/List';
import Content from './components/content';
const App: React.FC = () =>(
  <>
    <Header/>
    <Content>
      <Search/>
      <List/>
    </Content>
    
    <GlobalStyle/>
  </>
);

export default App;
