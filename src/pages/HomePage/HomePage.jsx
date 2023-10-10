import React from 'react';
import {
  Hero,
  LeftDiv,
  RightDiv,
  StyledSection,
  ToCatalogLink,
  WrapperBottom,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <StyledSection>
      <Hero>
        <h1>
          Welcome to the <span>Car Rental Service</span>
        </h1>
        <ToCatalogLink to="/catalog">TO OUR CATALOG</ToCatalogLink>
      </Hero>
      <WrapperBottom>
        <LeftDiv></LeftDiv>
        <RightDiv></RightDiv>
      </WrapperBottom>
    </StyledSection>
  );
};

export default HomePage;
