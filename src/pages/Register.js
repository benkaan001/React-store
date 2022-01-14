import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.unsplash.com/photo-1623199648374-a4ff4e14e719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=1800&q=100');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Disclosure = styled.span`
  font-size: 12px;
  margin: 30px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin: 10px 0px 5px;
  background-color: var(--persian-green);
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title> CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder='name' />
          <Input placeholder='last name' />
          <Input placeholder='email' />
          <Input placeholder='username' />
          <Input placeholder='password' />
          <Input placeholder='confirm password' />
        </Form>
        <Disclosure>
          Halo will use information you submit (including identifiers,
          commercial information, and internet or other electronic network
          activity information) to fulfill this request. To learn more, see our
          <b> privacy policy</b> and <b>terms of use</b>.
        </Disclosure>
        <Button>CREATE</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
