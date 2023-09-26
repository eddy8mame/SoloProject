import styled from 'styled-components';

const ItemPrice = ({price}) => {
  return <Price>{price}</Price>
}

export default ItemPrice; 

const Price = styled.p`
font-size: 0.7rem; 
width: 70%;
text-align: left; 
`;