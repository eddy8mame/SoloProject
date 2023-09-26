import styled, {keyframes} from 'styled-components';
import ItemImage from './ItemImage';
import ItemTitle from './ItemTitle';
import ItemPrice from './ItemPrice';
import ItemDesc from './ItemDesc';
import ItemSelect from './ItemSelect';
import ItemOptions from './ItemOptions';

const ItemCard = ({ item, id }) => {
  const { image, name:title, description:desc } = item; 
  
  return (
    <Wrapper>
      <Card>
      <ItemOptions/>
      <ItemSelect id={id} />
      <ItemImage image={image} alt={desc} />
      <ItemTitle title={title} />
      {/* <ItemPrice price={price} /> */}
      <ItemDesc desc={desc} />
    </Card>
    </Wrapper>
  )
};

export default ItemCard; 

const Card = styled.div`
position: relative; 
background: white;
height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center; 
gap: 10px;
border-radius: 4px;
`;

const gradient = keyframes`
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}
`

const Wrapper = styled.div`
position: relative; 
height: 300px;
padding: 1px; 
border-radius:4px; 
background: linear-gradient(-45deg, #FFFFFF, #D5D5D5); 
animation: ${gradient} 4s ease infinite; 
`;