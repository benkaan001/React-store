import { Badge } from '@material-ui/core';
import {
  LocationOnOutlined,
  Search,
  ShoppingCartOutlined,
} from '@material-ui/icons';

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  color: var(--charcoal);
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 30px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo> H || A || L || O </Logo>
        </Left>

        <Right>
          <MenuItem>
            <LocationOnOutlined />
          </MenuItem>
          US
          <MenuItem> REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={2} color='primary'>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
