import styled from 'styled-components';

const AddItem = ({toggleModal}) => {

  return (
    <Button onClick={toggleModal}>
    <PlusIcon xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' >
      <path fill="#000000" d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
    </PlusIcon>
    </Button>
  )

};

const Button = styled.button`
border-radius: 50%; 
`;


const PlusIcon = styled.svg`
width: 50px;
height: 50px;
box-sizing:inherit;
`;

export default AddItem; 