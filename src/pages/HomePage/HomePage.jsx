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
        <RightDiv>
          <h2>
            Discover the Perfect Ride with Us! Explore a wide range of rental
            cars for every need and budget. Find, book, and hit the road
            hassle-free. Your journey begins here!
          </h2>
        </RightDiv>
      </WrapperBottom>
    </StyledSection>
  );
};

export default HomePage;
