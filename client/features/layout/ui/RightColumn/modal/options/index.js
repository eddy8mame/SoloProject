import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSelectAll, deleteItem, updateProduct } from "../../../../../../components/item/itemsSlice";

const SelectionOptions = () => {

  const dispatch = useDispatch();
  const [isAllSelected, setIsAllSelected] = useState(false);

  return (
    <Wrapper>
      {isAllSelected ?
        <ModalOption onClick={()=> {setIsAllSelected(!isAllSelected); dispatch(toggleSelectAll(true))}}>Unselect All</ModalOption>
        : <ModalOption onClick={()=> {setIsAllSelected(!isAllSelected); dispatch(toggleSelectAll(false))}} >Select All</ModalOption>
      }
      <ModalOption onClick={()=> dispatch(deleteItem())}>Delete</ModalOption>
      <ModalOption onClick={()=> dispatch(updateProduct())}>Mark Purchased</ModalOption>
      <ModalOption>Create Collection</ModalOption>
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



export default SelectionOptions; 