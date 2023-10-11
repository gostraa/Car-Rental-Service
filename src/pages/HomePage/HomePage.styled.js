import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledSection = styled.section`
  padding: 55px 128px 0 128px;
`;

export const Hero = styled.div`
  background: linear-gradient(rgba(1, 0, 0, 0.4), rgba(10, 0, 0, 0.6)),
    url('https://static.tildacdn.com/tild6166-3166-4164-b863-336137336265/shutterstock_1092216.jpg')
      center/cover;
  width: 100%;
  background-position: 50% 70%;
  height: 555px;
  padding: 50px;

  h1 {
    color: #ffffff;
    font-size: 50px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
    margin-bottom: 50px;
  }
  span {
    color: var(--primary-btn-color);
  }
`;
export const WrapperBottom = styled.div`
  display: flex;
  height: 367px;
`;

export const LeftDiv = styled.div`
  background: linear-gradient(rgba(1, 0, 0, 0.4), rgba(10, 0, 0, 0.6)),
    url('https://meksika.info/wp-content/uploads/2018/12/Arenda-avto-v-Meksike.jpg')
      center/cover;
  width: 50%;
`;

export const RightDiv = styled.div`
  background: linear-gradient(rgba(1, 0, 0, 0.4), rgba(10, 0, 0, 0.6)),
    url('https://www.rentcars.ru/uploads/news/id167/nzn-17-02-2020.jpg')
      center/cover;
  width: 50%;
  padding: 20px;
  h2 {
    color: var(--white);
    font-size: 30px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  }
`;

export const ToCatalogLink = styled(Link)`
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  border-radius: 12px;
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
