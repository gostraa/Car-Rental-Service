import styled from 'styled-components';
import { RxCross1 } from 'react-icons/rx';
export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000000;
`;

export const ModalContainer = styled.div`
  padding: 20px 37px 40px 37px;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Тень модального окна */
  max-width: 541px;
  overflow: auto;
  text-align: start;

  div:nth-child(2) {
    margin-bottom: 14px;
  }

  div:nth-child(6) {
    margin-bottom: 24px;
  }
`;

export const ModalImg = styled.img`
  border-radius: 24px;
`;

export const ModalSvg = styled(RxCross1)`
  position: relative;
  width: 24px;
  height: 24px;
  left: 460px;
  cursor: pointer;
`;

export const InfoModal = styled.div`
  max-height: 44px;
  margin-bottom: 14px;

  p {
    padding: 2px 6px;
    border-right: 1px solid;
    text-align: center;
  }

  p:last-child {
    border-right: none;
  }
`;

export const Description = styled.p`
  color: #121417;
  font-size: 14px;
  line-height: 1.42;
  padding-left: 6px;
  margin-bottom: 24px;
`;

export const Headers = styled(Description)`
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Element = styled.p`
  border-right: 1px solid;
  padding-left: 6px;
  padding-right: 6px;
`;

export const Wrapper = styled.div`
  p:last-child {
    border-right: none;
  }
`;

export const BackgroundWrapper = styled(Wrapper)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const BackgroundElem = styled.p`
  border-radius: 35px;
  background: #f9f9f9;
  padding: 7px 14px;
  color: #363535;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;

  span {
    color: #3470ff;
    font-family: Montserrat;
    font-size: 12px;
    margin-left: 5px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -0.24px;
  }
`;

export const RentalLink = styled.a`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: var(--White, #fff);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  text-decoration: none;
`;
