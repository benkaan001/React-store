import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: var(--burnt-sienna);
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  letter-spacing: 1px;
`;
const Announcement = () => {
  return (
    <Container>
      THE WINTER WARDROBE EVENT UP TO 30% OFF COLD-WEATHER STAPLES
    </Container>
  );
};

export default Announcement;
