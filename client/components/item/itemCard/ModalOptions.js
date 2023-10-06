import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {deleteItem} from '../itemsSlice'

const ModalOptions = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false)

  const handleOnClick = () => {
    setIsOpen(true); 

  }

  return (
    <Wrapper>
      <ModalOption>Mark Purchased</ModalOption>
      <ModalOption onClick={handleOnClick}>Edit Item</ModalOption>
      <ModalOption>Share</ModalOption>
      <ModalOption onClick={() => dispatch(deleteItem())}>Delete</ModalOption>
      
      {isOpen && <EditItemModal/>}
    </Wrapper>
  )
};

const Wrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items:center;
box-sizing:inherit;
&:last-child {
  border-bottom: 1px solid black;
}
opacity: 1 important!;
`;

const ModalOption = styled.div`
width:100%;
display: flex;
flex-grow: 1;
justify-content: center;
align-items: center;
color: black;
box-sizing:inherit;
border: 1px solid black; 
border-bottom: none; 
background: white;
`;

const EditItemModal = styled.div`
display: absolute; 
top: 0;
bottom: 0; 
left: 0; 
right: 0; 
background: red;

`;



export default ModalOptions; 