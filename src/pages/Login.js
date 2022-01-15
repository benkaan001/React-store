import React from 'react';
import styled from 'styled-components';
import { mobile, tablet } from '../mobileScreen';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.unsplash.com/photo-1586790167861-6e87cdff91b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({ width: '85%' })}
  ${tablet({ width: '50%' })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 2px;
  ${mobile({ textAlign: 'center' })}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: var(--persian-green);
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  ${tablet({ width: '30%', padding: '10px 15px' })}
`;
const Link = styled.a`
  margin: 5px 5px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  ${mobile({ margin: '0px 2px' })};
  ${tablet({ margin: '0px 15px' })}
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title> SIGN IN TO YOUR ACCOUNT</Title>
        <Form>
          <Input placeholder='username' />
          <Input placeholder='password' />
          <Button>SIGN IN</Button>
        </Form>
        <Link>FORGOT YOUR PASSWORD?</Link>
        <Link>CREATE A HALO ACCOUNT</Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
