import styled from 'styled-components';
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useGetRegisterUserMutation } from "../components/item/api";
import {logout, setCredentials} from '../components/user/userSlice'

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  
  const [registerUser,
    {
      error,
      isUninitialized,
      isLoading, 
      isSuccess, 
      isError, 
      reset
    }] = useGetRegisterUserMutation();
  
  const { register, handleSubmit } = useForm(); 

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) navigate('/dashboard');

    if (isSuccess) navigate('/login');

  }, [navigate, userInfo, isSuccess])

  
  const submitForm = async (data) => {
    try {
      const res = await registerUser(data); 
      navigate('/'); 

    } catch (err) {
      console.log('Error', err); 
    }

  }


  return (
    <OuterWrapper>
      <Form onSubmit={handleSubmit(submitForm)}>
        <InnerWrapper>
          <Label htmlFor='username'>
            Username
            <Input
              type='text'
              name='username'
              id='username'
              placeholder='Username'
              {...register('username')}
            />
          </Label>
          <Label htmlFor='password'>
            Password
            <Input
              type='password'
              name='username'
              id='password'
              placeholder='Password'
              {...register('password')}
            />
          </Label>
          <Button>Register</Button>
          <p>
            Have an account? 
          <Link to='/'> Log in </Link>
          </p>
        </InnerWrapper>
      </Form>
    </OuterWrapper>
  )
}; 

const OuterWrapper = styled.div`
font-family: FlindersFont;
display: flex; 
height: 100vh; 
justify-content: center;
align-items: center;
`;

const InnerWrapper = styled.div`
display: flex; 
flex-direction: column;
align-items: center;
justify-content: center;
row-gap: 1em;
height: 300px; 
width: 300px; 
`;

const Input = styled.input`
margin-left: .5em;
padding: .1em .50em .25em;
`;

const Form = styled.form`
border: 1px solid black;
`;

const Label = styled.label`
display:flex; 
flex-direction:row;
justify-content: center;
align-items: center;
margin-right: 5px;
width:100%; 
`;

const Button = styled.button`
width: 80%;
display: block;
`;

export default RegisterScreen