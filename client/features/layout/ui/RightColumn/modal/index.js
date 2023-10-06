import styled from "styled-components";
import { useSelector } from 'react-redux'
import SelectionOptions from "./options";
import AddItem from "./options/AddItem";
import { useState } from "react";

const Modal = () => {

  const { itemIsSelected } = useSelector((state) => state.items);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    console.log('toggled');
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper isselected={itemIsSelected}>
      {itemIsSelected ? <SelectionOptions /> : <AddItem toggleModal={toggleModal} />}
      
      {
        isOpen && (
          <FullscreenModal>
            <p>This is a fullscreen modal.</p> 
            <button onClick={toggleModal}>Close</button>         
          </FullscreenModal >
        )
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: stretch;
position: fixed;
border: ${(props) => (props.isselected ? 'none' : '1px solid rgba(0, 0, 0, 0.75)')}; 
border-radius: 50%;
height: ${(props) => (props.isselected ? '150px' : '50px')};
width: ${(props) => (props.isselected ? '150px' : '50px')};
background-color: white;
// box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.75); /* Corrected 'box-shadow' */
box-sizing: border-box;
transition: height 0.2s, width 0.2s;
`;

const FullscreenModal = styled.div`
position: absolute; 
top: 0; 
left: 0; 
height:100%; 
width:100; 
z-index: 101; 
background-color: red;
opacity: 0;
transition:opacity 0.5s, visibility 0s 0.5s; 
`;


export default Modal; 