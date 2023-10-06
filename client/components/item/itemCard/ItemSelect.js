import styled from 'styled-components';
import { useDispatch, useSelector} from 'react-redux';
import { toggleSelect } from '../itemsSlice';

const ItemSelect = ({ id, isMouseOver }) => { 
  const isSelected = useSelector((state) => state.items.selectedItems[id] ? true : false);
  const dispatch = useDispatch();

  const handleSelectClick = (id) => {
    dispatch(toggleSelect(id));
  }

  return <SelectButton selected={isSelected} ismouseover={isMouseOver} onClick={() => handleSelectClick(id)} />
};

const SelectButton = styled.button`
display: block;
position: absolute;
top: 1px; 
right: 1px;
padding: .55em .55em;
border: none;
border-radius: 50%;
border: ${(props) => props.selected ? '1px solid yellow' : '1px solid black'};
border-color: ${(props) => props.selected ? 'yellow' : 'black'};
background-color: ${(props) => props.selected ? 'yellow': 'white'};
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
cursor: pointer;
opacity: ${(props) => props.selected ? '1' : props.ismouseover ? '1' : '0'};
transition: opacity 0.2s;
`;

export default ItemSelect;
