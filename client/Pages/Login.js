import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useGetLoginUserMutation } from '../components/item/api';
import { useDispatch, useSelector } from 'react-redux';
import { Form, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { logout } from '../components/user/userSlice';

const Login = () => {
  const { loading, error } = useSelector((state) => state.user)

  const [loginUser, { data: res }] = useGetLoginUserMutation();
  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {
    loginUser(data)
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
      <button onClick={submitForm}>Sign In</button>
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