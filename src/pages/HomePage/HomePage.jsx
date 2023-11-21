import React from 'react';
import { Hero, StyledSection, ToCatalogLink } from './HomePage.styled';

const HomePage = () => {
  return (
    <StyledSection>
      <Hero>
        <h1>
          Welcome to the <span>Car Rental Service</span>
        </h1>
        <ToCatalogLink to="/catalog">TO OUR CATALOG</ToCatalogLink>
      </Hero>
    </StyledSection>
  );
};

export default HomePage;
