import ItemCard from '../itemCard/index'

const ItemItem = ({ item, id }) => {
  return (
    <li>
      <ItemCard item={item} id={id} />
  </li>
  )
};

export default ItemItem;