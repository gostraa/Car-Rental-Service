import { filterAdverts } from 'helpers/helpers';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFilteredAdverts } from 'redux/Advert/advertSlice';
import { getAdverts } from 'services/advertService';
import {
  DisableOption,
  InputFrom,
  InputTo,
  InputWrapper,
  Option,
  SearchButton,
  SelectBrand,
  SelectPrice,
  StyledForm,
  StyledP,
} from './SearchForm.styled';

const maxPrice = 200;

const optionsCar = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Chrysler',
  'Kia',
  'Land',
];

const SearchForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    make: '',
    rentalPrice: 100000,
    mileageFrom: 0,
    mileageTo: 10000000,
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const allAdverts = await getAdverts();
    const filtered = filterAdverts(allAdverts, formData);
    dispatch(addFilteredAdverts(filtered));
  };
  return (
    <StyledForm>
      <div>
        <StyledP>Car brand</StyledP>

        <SelectBrand
          name="make"
          id="make"
          defaultValue={''}
          onChange={handleInputChange}
        >
          <DisableOption value="" disabled>
            Enter the text
          </DisableOption>
          {optionsCar.map(option => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </SelectBrand>
      </div>

      <div>
        <StyledP>Price/ 1 hour</StyledP>
        <SelectPrice
          name="rentalPrice"
          id="price"
          defaultValue={''}
          onChange={handleInputChange}
        >
          <DisableOption value="" disabled>
            To $
          </DisableOption>
          {Array.from({ length: maxPrice / 10 + 1 }, (_, index) => (
            <Option key={index} value={index * 10}>
              {index * 10}
            </Option>
          ))}
        </SelectPrice>
      </div>

      <div>
        <StyledP>Сar mileage / km</StyledP>
        <InputWrapper>
          <InputFrom
            type="text"
            name="mileageFrom"
            id="from"
            placeholder="From"
            onChange={handleInputChange}
          />
          <InputTo
            type="text"
            name="mileageTo"
            id="to"
            placeholder="To"
            onChange={handleInputChange}
          />
        </InputWrapper>
      </div>

      <SearchButton type="button" onClick={handleSubmit}>
        Search
      </SearchButton>
    </StyledForm>
  );
};

export default SearchForm;
