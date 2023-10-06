import CarsList from 'components/CarsList/CarsList';
import Sidebar from 'components/Sidebar/Sidebar';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAdvertsThunk } from 'redux/Advert/advertThunks';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdvertsThunk());
  }, [dispatch]);

  return (
    <>
      <section>
        <Sidebar />
      </section>

      <section>
        <CarsList />
      </section>
    </>
  );
};

export default CatalogPage;
