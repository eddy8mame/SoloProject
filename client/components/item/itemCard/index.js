import styled, {keyframes} from 'styled-components';
import ItemImage from './ItemImage';
import ItemTitle from './ItemTitle';
import ItemPrice from './ItemPrice';
import ItemDesc from './ItemDesc';
import ItemSelect from './ItemSelect';
import ItemOptions from './ItemOptions';
import useMouseOver from '../../../features/layout/ui/RightColumn/modal/Hooks/useMouseOver';
import { useState } from 'react';

const ItemCard = ({ item, id }) => {
  const { image, name: title, description: desc, offers } = item;

  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  }

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  }
  
  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Card>
        <ItemOptions id={id} isMouseOver={isMouseOver} />
        <ItemSelect id={id} isMouseOver={isMouseOver} />
        <ItemImage image={image} alt={desc} />
        <ItemTitle title={title} />
        <ItemPrice price={`${offers.price}`} />
        {/* <ItemDesc desc={desc} /> */}
    </Card>
    </Wrapper>
  )
};

export default ItemCard; 

const Card = styled.div`
font-family: 'FlindersFont', sans-serif;
position: relative; 
background: white;
height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center; 
gap: 10px;
border-radius: 4px;
margin-bottom: 30px;
`;

const Wrapper = styled.div`
position: relative; 
height: 300px;
padding: 1px; 
border-radius:4px; 
background: linear-gradient(-45deg, #FFFFFF, #D5D5D5); 
margin-bottom: 30px;
`;

