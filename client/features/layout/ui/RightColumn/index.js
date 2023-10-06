import styled from "styled-components";
import { useSelector } from "react-redux";
import Modal from './modal/index'
import SortBy from "./details/SortBy";

const RightColumn = ({children}) => {

  const isSelected = useSelector(state => state.items.itemIsSelected)

  return (
    <RightColumnWrapper>
      <Modal />
      <SortBy/>
    </RightColumnWrapper>
  )
};

const RightColumnWrapper = styled.div`
font-family: 'FlindersFont', sans-serif;
font-size: .8rem;
text-align: right;
width: calc(200%); 
height: 100%; 
display: block; 

`;

export default RightColumn; 