import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useGetUserMutation } from '../components/item/itemApi';
import styled from 'styled-components';

const Login = () => {
  const [isUsername, setIsUsername] = useState('');
  const [isPassword, setIsPassword] = useState('');

  const [getUser, response, status ] = useGetUserMutation();

  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log('have been clicked')
    getUser({});
    
  }
  return (
    <OuterWrap>
      <InnerWrap>
      <label>
        Username
      <input onChange={(e)=> setIsUsername(e.target.value)}/>
      </label>
      <label> 
        Password
      <input onChange={(e)=> setIsPassword(e.target.value)}/>
      </label>
      <button onClick={handleSubmit}>Sign In</button>
      </InnerWrap>
    </OuterWrap>
  )

};

const OuterWrap = styled.div`
height: 100vh; 
display: flex;
align-items: center;
justify-content: center;
`;

const InnerWrap = styled.div`
display: flex; 
flex-direction: column;
align-items: center;
justify-content: center;
row-gap: 1em;
height: 300px; 
width: 300px; 
border: 1px solid black;
`;

const Input = styled.div`

`;


export default Login; 