import React, { useState } from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/NavBar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../mobileScreen';
import { useLocation } from 'react-router';

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
  const location = useLocation();
  // console.log(location.pathname.split('/'));
  const category = location.pathname.split('/')[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('Featured');

  // console.log(filters);

  const filterHandler = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText> Filter Collection: </FilterText>
          <Select name='color' onChange={filterHandler}>
            <Option disabled>Color</Option>
            <Option> yellow </Option>
            <Option> gray</Option>
            <Option> blue </Option>
            <Option> pink</Option>
            <Option> black</Option>
          </Select>
          <Select name='size' onChange={filterHandler}>
            <Option disabled>Size</Option>
            <Option>extra-small</Option>
            <Option>small</Option>
            <Option>medium</Option>
            <Option>large</Option>
            <Option>extra-large</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText> Sort By: </FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value='featured'>Featured</Option>
            <Option value='asc'>Price: High to Low</Option>
            <Option value='dec'>Price: Low to High</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
