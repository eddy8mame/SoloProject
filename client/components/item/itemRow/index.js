import styled from 'styled-components';
import ItemColumn from '../itemColumn';

const ItemRow = ({ items }) => {

  return (
    <ItemsRowWrap>
      {items ? items.map((item) => {
        return <ItemColumn key={item.id} id={item.id} item={item} />
      }) : null}
    </ItemsRowWrap>
  )
};

const ItemsRowWrap = styled.div`
display: flex; 
flex-wrap: wrap; 
margin-right: -20px;
`;

export default ItemRow; 