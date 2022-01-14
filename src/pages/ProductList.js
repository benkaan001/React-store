import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/NavBar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../mobileScreen';

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  ${mobile({ textAlign: 'center' })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ backgroundColor: 'var(--persian-green)' })}
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: '0px', fontSize: '16px' })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0px' })}
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText> Filter Collection: </FilterText>
          <Select>
            <Option defaultValue>Color</Option>
            <Option> Copper Brown </Option>
            <Option> Mulled Wine</Option>
            <Option> Black Granite </Option>
            <Option> Violet Verbena</Option>
            <Option> Black </Option>
          </Select>
          <Select>
            <Option defaultValue>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText> Sort By: </FilterText>
          <Select>
            <Option defaultValue=''>Featured</Option>
            <Option>Price: High to Low</Option>
            <Option>Price: Low to High</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
