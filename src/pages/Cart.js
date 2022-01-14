import styled from 'styled-components';
import React from 'react';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 300;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

// const TopButton = styled.button`
//   padding: 10px;
//   font-weight: 600px;
//   cursor: pointer;
//   border: ${(props) => props.type === 'filled' && 'none'};
//   background-color: ${(props) =>
//     props.type === 'filled' ? 'black' : 'transparent'};
//   color: ${(props) => props.type === 'filled' && 'white'};
// `;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span`
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 0.5px;
`;

const ProductId = styled.span`
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 0.5px;
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span`
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 0.5px;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductQtyContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductQty = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: var(--gray-2);
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid var(--gray-2);
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItemContainer = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  letter-spacing: 1px;
  cursor: pointer;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title> YOUR BAG</Title>
        <Top>
          {/* <TopButton>CONTINUE SHOPPING</TopButton> */}
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          {/* <TopButton type='filled'>CHECKOUT NOW</TopButton> */}
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src='https://images.lululemon.com/is/image/lululemon/LM3DCLS_052828_1?wid=380&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72' />
                <Details>
                  <ProductName>
                    <b>Product:</b> SHIFT STITCH HOODIE
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 100000099
                  </ProductId>
                  <ProductColor color='pink' />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductQtyContainer>
                  <Add />
                  <ProductQty>1</ProductQty>
                  <Remove />
                </ProductQtyContainer>
                <ProductPrice>$118</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src='https://images.lululemon.com/is/image/lululemon/LM3CMCS_051217_1?wid=380&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72' />
                <Details>
                  <ProductName>
                    <b>Product:</b> ALL AROUND CREWNECK SWEATER
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 100000245
                  </ProductId>
                  <ProductColor color='olive' />
                  <ProductSize>
                    <b>Size:</b> L
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductQtyContainer>
                  <Add />
                  <ProductQty>1</ProductQty>
                  <Remove />
                </ProductQtyContainer>
                <ProductPrice>$99</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle> ORDER SUMMARY</SummaryTitle>
            <SummaryItemContainer>
              <SummaryItemText> Subtotal</SummaryItemText>
              <SummaryItemPrice> $217.00</SummaryItemPrice>
            </SummaryItemContainer>
            <SummaryItemContainer>
              <SummaryItemText> Shipping</SummaryItemText>
              <SummaryItemPrice> $4.99</SummaryItemPrice>
            </SummaryItemContainer>
            <SummaryItemContainer>
              <SummaryItemText> Discount</SummaryItemText>
              <SummaryItemPrice> $ - 4.99</SummaryItemPrice>
            </SummaryItemContainer>
            <SummaryItemContainer type='total'>
              <SummaryItemText> Total</SummaryItemText>
              <SummaryItemPrice> $217.00</SummaryItemPrice>
            </SummaryItemContainer>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
