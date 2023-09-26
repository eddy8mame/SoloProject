import styled from 'styled-components';

const ItemTitle = ({ title }) => {
  return <Title>{title}</Title>
}

export default ItemTitle; 

const Title = styled.strong`
font-size: 0.7rem; 
width: 70%;
text-align: left; 
`;