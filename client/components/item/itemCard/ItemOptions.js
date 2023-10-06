import styled from 'styled-components'; 
import { useEffect, useState } from 'react';
import ItemOptionsModal from './ItemOptionsModal';

const ItemOptions = ({ isMouseOver, id}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {

    if (!isMouseOver) {
      setIsModalOpen(false);
    }

  },[isModalOpen, isMouseOver])


  return (
    <OptionsButton onClick={()=> setIsModalOpen(!isModalOpen)} ismouseover={isMouseOver}>
      <Dot />
      <Dot />
      {isMouseOver && isModalOpen && <ItemOptionsModal location={isModalOpen} />}
    </OptionsButton>
  )
};

const OptionsButton = styled.button`
font-family: 'FlindersFont', sans-serif;
position: absolute;
display: flex; 
align-items: center;
top: 0px; 
left: 0px;
padding: 1em 1em;
border: 0;
border-radius: 0.5em;
cursor: pointer;
background-color: transparent;
opacity: .75;
opacity: ${(props) => props.ismouseover ? '1' : '0'}; 
// background: ${(props) => props.ismouseover ? 'rgba(255, 255, 255, .75)' : 'rgba(255, 255, 255, 0)'};
`;

const Dot = styled.span`
display: inline-block;
background-color: white; 
padding: .15em .15em;
margin-right: 2px;
border-radius: 50%;
border: 1px solid black;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
`;

export default ItemOptions; 