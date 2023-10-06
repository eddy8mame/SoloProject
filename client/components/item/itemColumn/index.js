import ItemCard from '../itemCard/index'
import styled from 'styled-components';

const ItemColumn = ({ item, id }) => {
  return (
    <ItemColumnWrap>
      <ItemCard item={item} id={id} />
    </ItemColumnWrap>
  )
};

const ItemColumnWrap = styled.div`
width: calc(25% - 20px);
padding-right: 20px;
display:block;
`;

export default ItemColumn;