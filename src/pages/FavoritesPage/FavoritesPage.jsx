import CarsList from 'components/CarsList/CarsList';

import { selectFavoriteAdverts } from 'helpers/selectors';
import { Section } from 'pages/CatalogPage/CatalogPage.styled';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { removeCurrentPage } from 'redux/Advert/advertSlice';

const FavoritePage = () => {
  const favorites = useSelector(selectFavoriteAdverts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeCurrentPage());
  }, [dispatch]);
  return (
    <Section>
      {favorites.length !== 0 ? <CarsList /> : <p>there's nothing here yet</p>}

      <ToastContainer autoClose={2500} />
    </Section>
  );
};

export default FavoritePage;
