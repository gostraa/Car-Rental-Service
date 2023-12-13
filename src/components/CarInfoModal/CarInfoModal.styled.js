import styled from 'styled-components';
import { RxCross1 } from 'react-icons/rx';
export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--backdrop-color);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 30px 40px 30px;
  border-radius: 24px;
  background: var(--white);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 541px;

  overflow: auto;
  text-align: start;

  div:nth-child(2) {
    margin-bottom: 10px;
  }

  div:nth-child(6) {
    margin-bottom: 8px;
  }

  @media screen and (max-width: 767.9px) {
    width: 90%;
    height: 99%;
    padding: 10px;
  }
`;

export const ModalImg = styled.img`
  width: 100%;
  border-radius: 24px;
`;

export const ModalSvgWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalSvg = styled(RxCross1)`
  width: 24px;
  height: 24px;
  @media screen and (max-width: 767.9px) {
    width: 20px;
    height: 20px;
  }
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
  color: var(--secondary-text-color);
  font-size: 14px;
  line-height: 1.42;
  padding-left: 6px;
  margin-bottom: 10px;
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
  margin-bottom: 15px;
`;

export const BackgroundElem = styled.p`
  border-radius: 35px;
  background: var(--modal-elem-background);
  padding: 7px 14px;
  color: #363535;
  font-family: Montserrat;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;

  span {
    color: var(--primary-btn-color);
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
  background: var(--primary-btn-color);
  color: var(--white);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  text-decoration: none;
  transition: background 0.5s ease;

  &:hover {
    background: #0b44cd;
  }
`;
