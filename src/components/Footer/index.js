import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
  YouTube,
} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Desc = styled.p`
  margin: 10px 10px 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Title>ABOUT US</Title>
        <Desc>
          We were born from a love of daily sweat, the desire to innovate
          technical athletic gear and the appetite to build a community where we
          can live our best life. Get the low-down on our ever-evolving journey.
        </Desc>
        <SocialContainer>
          <SocialIcon color='55ACEE'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <Pinterest />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <YouTube />
          </SocialIcon>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>LINKS</Title>
        <List>
          <ListItem>SignIn</ListItem>
          <ListItem>Register</ListItem>
          <ListItem>COVID-19 FAQ</ListItem>
          <ListItem>Product Care</ListItem>
          <ListItem>Newsletter</ListItem>
          <ListItem>Shipping Policy</ListItem>
          <ListItem>Order Status</ListItem>
          <ListItem>Returns</ListItem>
          <ListItem>Media</ListItem>
          <ListItem>Privacy Policy</ListItem>
        </List>
      </Center>
      <Right>
        <Title>CONTACT US</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} /> 1818 Cornwall Ave, Vancouver
          BC V6J 1C7
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} /> 1.877.263.9300
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} /> letschat@halo.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
