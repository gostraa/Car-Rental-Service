import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  width: 859px;
  margin-bottom: 50px;

  div:first-child {
    width: 224px;
  }

  div:nth-child(2) {
    width: 125px;
  }

  div:nth-child(3) {
    width: 320px;
  }

  select {
    height: 48px;
    border: none;
    border-radius: 14px;
    background: #f7f7fb;
  }

  input {
    height: 48px;
    padding: 14px 24px 14px 24px;
    background: #f7f7fb;
  }

  input:focus {
    outline: none;
    border: none;
  }
`;

export const SelectBrand = styled.select`
  width: 224px;
  padding: 14px 89px 14px 18px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  overflow: hidden; /* Скрыть скроллбар */
`;

export const SelectPrice = styled.select`
  width: 125px;
  padding: 14px 18px 14px 18px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  overflow: hidden; /* Скрыть скроллбар */
`;

export const DisableOption = styled.option`
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
`;

export const InputWrapper = styled.div`
  display: flex;
`;

export const InputFrom = styled.input`
  border: none;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  width: 160px;

  &::placeholder {
    color: #121417;
    font-family: Manrope;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }
`;
export const InputTo = styled.input`
  border: none;
  border-radius: 0px 14px 14px 0px;
  width: 160px;

  &::placeholder {
    color: #121417;
    font-family: Manrope;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  height: 48px;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-family: Manrope;
  font-size: 16px;
  line-height: 1.4;
  cursor: pointer;
`;

export const StyledP = styled.p`
  margin-bottom: 8px;
`;

export const Option = styled.option`
  color: rgba(18, 20, 23, 0.2);
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
`;
