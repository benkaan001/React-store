import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';

import NavBar from '../components/NavBar';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
    </div>
  );
};

export default Home;
