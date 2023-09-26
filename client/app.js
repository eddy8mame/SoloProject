import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Items from './components/item/index';
import Login from './Pages/Login';
import Layout from './features/layout/ui';
import FlindersFontRegular from './fonts/FlindersTrial-Regular.ttf'
import FlindersFontBlack from './fonts/FlindersTrial-Black.ttf';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'FlinderFont';
  src: url(${FlindersFontRegular}) format('truetype');
}

@font-face {
  font-family:'FlindersFontBlack';
  src: url(${FlindersFontBlack}) format('truetype');
}

* {
  margin: 0; 
  padding: 0; 
}

body {
  font-family: 'FlinderFont', sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  display: flex; 
  flex-direction: column; 
  height: 100vh;
}
`;


const App = () => {
  console.log('App Component')
  return (
    <div>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}/>
      </Routes>
    </BrowserRouter>  
    </div>
  );
};



export default App; 