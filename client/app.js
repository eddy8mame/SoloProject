import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import LoginScreen from './Pages/LoginScreen';
import Layout from './features/layout/ui';
import RegisterScreen from './Pages/RegisterScreen';
import FlindersFontRegular from './fonts/FlindersTrial-Regular.ttf'
import FlindersFontBlack from './fonts/FlindersTrial-Black.ttf';
import { createGlobalStyle } from 'styled-components';
import { DndContext } from '@dnd-kit/core';
import { useState } from 'react';
import Droppable from './components/dragAndDrop/Droppable';
import Draggable from './components/dragAndDrop/Draggable';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'FlindersFont';
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
  font-family: 'FlindersFont', sans-serif;
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
  const containers = ['A', 'B', 'C'];
  const [parent, setParent] = useState(null); 
  const draggableMarkup = (
    <Draggable id='draggable'>Drag Me</Draggable>
  ); 


  return (
    <DndContext onDragEnd={handleDragEnd}>
      {/* <GlobalStyle />     */}
      {parent === null ? draggableMarkup : 'Drop here'}

      {containers.map((id, idx) => (
        <Droppable key={id} id={id}>
          {parent === id ? draggableMarkup: 'Drop here'}
        </Droppable>
      ))}
      {/* <Layout/> */}
  </DndContext>
  );

  function handleDragEnd(event) {
    const { over } = event; 
    
    setParent(over ? over.id : null)
  }
};



export default App; 