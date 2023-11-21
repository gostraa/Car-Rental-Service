import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledSection = styled.section`
  max-width: 2560px;
  margin: 0 auto;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(rgba(1, 0, 0, 0.4), rgba(10, 0, 0, 0.6)),
    url('https://static.tildacdn.com/tild6166-3166-4164-b863-336137336265/shutterstock_1092216.jpg')
      center/cover;
  width: 100%;
  height: 930px;

  h1 {
    color: #ffffff;
    font-size: 36px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
    margin-bottom: 100px;

    @media screen and (min-width: 768px) and (max-width: 2560px) {
      font-size: 50px;
    }
  }
  span {
    color: var(--primary-btn-color);
  }
`;

export const ToCatalogLink = styled(Link)`
  width: 186px;
  height: 58px;
  padding: 20px 14px;
  border-radius: 14px;
  background: var(--primary-btn-color);
  text-decoration: none;
  color: var(--White, #fff);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  transition: background 0.5s ease;

  &:hover {
    background: var(--secondary-btn-color);
  }
`;
