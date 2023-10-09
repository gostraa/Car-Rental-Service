import { filterAdverts } from 'helpers/helpers';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFilteredAdverts } from 'redux/Advert/advertSlice';
// import { getAdvertsThunk } from 'redux/Advert/advertThunks';
import { getAdverts } from 'services/advertService';

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
  // const adverts = useSelector(state => state.adverts.adverts);
  // const filterOptions = useSelector(state => state.filter.initialFilters);
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
    <form>
      <p>Car brand</p>
      <select
        name="make"
        id="make"
        defaultValue={''}
        onChange={handleInputChange}
      >
        <option value="" disabled>
          Enter the text
        </option>
        {optionsCar.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p>Price/ 1 hour</p>
      <select
        name="rentalPrice"
        id="price"
        defaultValue={''}
        onChange={handleInputChange}
      >
        <option value="" disabled>
          To $
        </option>
        {Array.from({ length: maxPrice / 10 + 1 }, (_, index) => (
          <option key={index} value={index * 10}>
            {index * 10}
          </option>
        ))}
      </select>

      <p>Сar mileage / km</p>
      <input
        type="text"
        name="mileageFrom"
        id="from"
        placeholder="From"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="mileageTo"
        id="to"
        placeholder="To"
        onChange={handleInputChange}
      />
      <button type="button" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
