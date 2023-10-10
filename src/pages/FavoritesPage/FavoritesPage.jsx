import FavoriteList from 'components/FavoriteList/FavoriteList';
import { Section } from 'pages/CatalogPage/CatalogPage.styled';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { removeCurrentPage } from 'redux/Advert/advertSlice';

const FavoritePage = () => {
  const favorites = useSelector(state => state.adverts.favoriteAdverts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeCurrentPage());
  }, [dispatch]);
  return (
    <Section>
      {favorites.length !== 0 ? (
        <FavoriteList />
      ) : (
        <p>there's nothing here yet</p>
      )}

      <ToastContainer autoClose={2500} />
    </Section>
  );
};

export default FavoritePage;
