import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 29px;
  padding: 0;
  list-style: none;
  margin-bottom: 100px;
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
  background: #3470ff;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  cursor: pointer;
`;

export const BtnLoadMore = styled.button`
  background-color: transparent;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  cursor: pointer;
`;

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 0 4px;
  p {
    color: #121417;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
    /* margin-right: 4px; */
  }
  p:first-child {
    margin-right: 5px;
  }

  p:nth-child(2) {
    color: #3470ff;
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
`;
