import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 29px;
  padding: 0;
  list-style: none;
  margin-bottom: 100px;
  max-width: 1440px;
  li {
    width: 274px;
    max-height: 426px;
  }
`;

export const BtnLearnMore = styled.button`
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: var(--primary-btn-color);
  color: var(--white);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  cursor: pointer;
  transition: background 0.5s ease;

  &:hover {
    background: var(--secondary-btn-color);
  }
`;

export const BtnLoadMore = styled.button`
  background-color: transparent;
  color: var(--primary-btn-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  cursor: pointer;
  transition: color 0.5s ease;

  &:hover {
    color: var(--secondary-btn-color);
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 0 4px;
  p {
    color: var(--secondary-text-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
  p:first-child {
    margin-right: 5px;
  }

  p:nth-child(2) {
    color: var(--primary-btn-color);
  }

  p:nth-child(3) {
    margin-right: auto;
  }
`;

export const InfoWrapper = styled.div`
  max-height: 44px;
  margin-bottom: 22px;

  p {
    padding: 2px 6px;
    border-right: 1px solid;
    text-align: center;
  }

  p:last-child {
    border: 0;
  }
`;
