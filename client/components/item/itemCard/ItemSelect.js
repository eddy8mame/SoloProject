import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { selectItem } from '../itemSlice';

const ItemSelect = ({ id }) => {
  const [isSelected, setIsSelected] = useState(false); 
  const dispatch = useDispatch();

  return <SelectButton selected={isSelected} onClick={() => { dispatch(selectItem(id));  setIsSelected(()=> !isSelected)}} />
};

const SelectButton = styled.button`
position: absolute;
top: 0px; 
right: 0px;
padding: 0.5em 1em;
border: 0;
border-radius: 1em;
background-color: ${(props) => props.selected ? 'black': 'pink'};
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
cursor: pointer;
`;

export default ItemSelect
