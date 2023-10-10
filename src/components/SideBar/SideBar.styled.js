import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 10px 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;

export const NavLinkStyles = `

  text-decoration: none;
  color: #333; 
  

  transition: color 0.3s ease, transform 0.3s ease; 

  &:hover {
    color: #007bff; 
    transform: scale(1.1); 
  }
`;

export const ActiveNavLinkStyles = `
  font-weight: bold; 
  color: #3470ff; 
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
