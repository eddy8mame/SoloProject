import React, { useState } from 'react'; 
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ItemList from './itemList/index';
// import ItemModal from './itemModal';
import { useGetAllItemsQuery } from './itemApi.js';

export const Items = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { data, error, isLoading, isSuccess, isError } = useGetAllItemsQuery();
  // const isSelected = useSelector((state) => state.item.itemIsSelected)
  // console.log(isSelected);
 /*
  if error, return error message
  else if loading, return loading message
  else if data, load data
 */
  

  return (
    <>
      {error ? (<>Oh no, there was an error</>)
        : isLoading ? (<>Loading...</>)
          : data ? (<ItemList items={data}/>)
            :null
      }
    </>
  ) 
};

export default Items; 