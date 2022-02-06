import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useUserData } from './hooks';
import Card from './components/card';
import { ChakraProvider } from '@chakra-ui/react'
import New from './components/New';


function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Card />
      </div>
    </ChakraProvider>

  );
}

export default App;
