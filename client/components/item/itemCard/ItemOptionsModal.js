import styled from 'styled-components';
import ModalOptions from './ModalOptions';

const ItemOptionsModal = () => {

  const handleOnClick = (e) => {
    e.stopPropagation();
  }; 


  return (
    <Modal onClick={(e)=> handleOnClick(e)}>
      <ModalOptions/>
    </Modal>
  )
};

const Modal = styled.div`
position: absolute;
top: ${(props) => 25}px;
left: ${(props) => 15}px;
display: flex;
flex-direction:column;
height: 150px;
width: 150px;
background: white;
border-radius: 4px;
box-shadow: none important!; 
opacity: 1 important!;
`;

export default ItemOptionsModal; 