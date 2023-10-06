import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { sort } from '../../../../../components/item/itemsSlice';
import api from '../../../../../components/item/api';

const SortBy = () => {

  const dispatch = useDispatch();

  return (
    <Wrapper>
      SORT
      <p onClick={()=> dispatch(sort('H-L'))}>Price: High to Low</p>
      <p onClick={() => dispatch(sort('L-H'))}>Price: Low to High</p>
      <p onClick={()=> dispatch(sort('A-Z'))}>Name: A-Z</p>
      <p onClick={()=> dispatch(sort('Z-A'))}>Name: Z-A</p>
    </Wrapper>
  )
};

const Wrapper = styled.div``;

export default SortBy; 