import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  width: 859px;
  margin-bottom: 50px;

  select {
    border-radius: 14px;
    background: #f7f7fb;
  }

  input {
    padding: 14px 24px 14px 24px;
    border: 1px solid;
    background: #f7f7fb;
  }
`;

export const SelectBrand = styled.select`
  width: 224px;
  padding: 14px 89px 14px 18px;
`;

export const SelectPrice = styled.select`
  width: 125px;
  padding: 14px 18px 14px 18px;
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
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  width: 111px;

  &::placeholder {
    color: #121417;
    font-family: Manrope;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }
`;
export const InputTo = styled.input`
  border-radius: 0px 14px 14px 0px;
  width: 111px;

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
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
`;
