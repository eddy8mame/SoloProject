import styled from "styled-components";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../components/user/userSlice";
import { useGetLoginUserMutation } from "../components/item/api";
import { useNavigate, Link } from "react-router-dom";


const LoginScreen = () => {
  const { userInfo, loading } = useSelector((state) => state.user);
  const [loginUser, { data, error, isUninitialized, isLoading, isSuccess, isError }] = useGetLoginUserMutation();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate(); 

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard')
    } 
  }, [navigate, userInfo])

  const submitForm = async (data) => {
    try {

      const user = await loginUser(data);
      dispatch(setCredentials(user));
      navigate('/dashboard');

    } catch (err) {
      console.log(err);
    }
  }

  const LoggingFN = (data) => {
    console.log(data); 
  }

  return (
    <OuterWrapper>
      <Greeting>
        <h1>dora</h1>
        {/* <RedPeriod>.</RedPeriod> */}
      </Greeting>
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
          <Button>Login</Button>
          <span>
            <p>
              Don't have an account?

              <Link to='/register'> Sign Up</Link>
            </p>
          </span>
        </InnerWrapper>
      </Form>
    </OuterWrapper>
  )
}

const OuterWrapper = styled.div`
font-family: FlindersFont;
display: flex; 
flex-direction:column;
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

const Greeting = styled.div`
display: flex;
justify-content: center;
width: 282px;
gap: 5px;
margin-top: 10px;
h1 {
    margin: 0px;
}
p {
    margin: 0px;
    font-size: 12px;
}
`;

const RedPeriod = styled.span`
color:red
`;
export default LoginScreen; 