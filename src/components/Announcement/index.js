import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: whitesmoke;
  color: var(--burnt-sienna);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return (
    <Container>New Member Special! 10% OFF on your first order!</Container>
  );
};

export default Announcement;
