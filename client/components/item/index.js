import React from 'react'; 
import { useSelector } from 'react-redux';
import ItemRow from './itemRow/index';
import { useGetAllItemsQuery } from './api.js';

export const Items = () => {

  const { data, loadInProgress } = useSelector((state) => state.items);
  const { queryData, isLoading, isSuccess, isError } = useGetAllItemsQuery();
  
  return (
    <>
      {isError ? (<>Oh no, there was an error</>)
        : isLoading ? (<>Loading...</>)
          : data ? (<ItemRow items={data}/>)
            :null
      }
    </>
  ) 
};

export default Items; 