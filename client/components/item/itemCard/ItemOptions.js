import styled from 'styled-components'; 

const ItemOptions = () => {
  return <OptionsButton/>
};

const OptionsButton = styled.button`
position: absolute;
top: 0px; 
left: 0px;
padding: 0.5em 1em;
border: 0;
border-radius: 0.5em;
background-color: pink;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
cursor: pointer;
`;

export default ItemOptions; 