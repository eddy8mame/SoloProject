import styled from 'styled-components';
import ItemItem from '../ItemItem';

const ItemList = ({ items}) => {

  return (
    <List>
      {items ? items.map((item) => {
        return <ItemItem key={item.id} id={item.id} item={item} />
      }): null}
    </List>
  )
}

const List = styled.ul`
width: 100%;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
padding-left: 0;
& > li {
  list-style: none;
}
`;



export default ItemList; 