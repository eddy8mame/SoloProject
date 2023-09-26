import styled from 'styled-components';

const ItemDesc = ({desc}) => {
  return <Description>{desc}</Description>
}

const Description = styled.p`
font-size: 0.7em; 
text-align:left; 
width:70%;
`;

export default ItemDesc;