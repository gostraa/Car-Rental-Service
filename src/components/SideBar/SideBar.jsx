import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation, StyledNavLink } from './SideBar.styled';

const SideBar = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Navigation>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/catalog">Catalog</StyledNavLink>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
      </Navigation>
      <Outlet />
    </Suspense>
  );
};

export default SideBar;
