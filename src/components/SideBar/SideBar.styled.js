import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 100%;
  padding: 10px 0;
  background-color: var(--white);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  position: fixed;
  z-index: 1;
`;

export const NavLinkStyles = `

  text-decoration: none;
  color: #333; 
  

  transition: color 0.3s ease, transform 0.3s ease; 

  &:hover {
    color: var(--primary-btn-color); 
    transform: scale(1.1); 
  }
`;

export const ActiveNavLinkStyles = `
  font-weight: bold; 
  color: var(--primary-btn-color); 
  transform: scale(1.1);

`;

export const StyledNavLink = styled(NavLink)`
  text-align: center;
  ${NavLinkStyles}

  &.active {
    ${ActiveNavLinkStyles}
  }
`;

export const StyledNavLinkNoUnderline = styled(StyledNavLink)`
  text-align: center;
  &:hover {
    text-decoration: none;
  }
`;
