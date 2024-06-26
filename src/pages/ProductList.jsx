import styled from "styled-components";
import { mobile } from "../responsive";
import Navbar from "../components/Navbar";
import Announcement from "../components/announcement/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const { value, name } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  // console.log(filters);
  // console.log(sort);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option value={``}>Select Color</Option>
            <Option value={`white`}>White</Option>
            <Option value={`black`}>Black</Option>
            <Option value={`red`}>Red</Option>
            <Option value={`blue`}>Blue</Option>
            <Option value={`yellow`}>Yellow</Option>
            <Option value={`green`}>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option value={``}>Select Size</Option>
            <Option value={`xs`}>XS</Option>
            <Option value={`s`}>S</Option>
            <Option value={`m`}>M</Option>
            <Option value={`l`}>L</Option>
            <Option value={`xl`}>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value={`newest`}>Newest</Option>
            <Option value={`asc`}>Price (asc)</Option>
            <Option value={`desc`}>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
