import React, { useState } from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Search from './components/Search';
import List from './components/List';
import Content from './components/content';
import {ModalProvider} from './hooks/ModalContext';
const App: React.FC = () =>{
  return (
  <>
    <ModalProvider>
      <Header/>
      <Content>
        <Search/>
        <List/>
      </Content>
    </ModalProvider>
    <GlobalStyle/>
  </>
)};

export default App;
