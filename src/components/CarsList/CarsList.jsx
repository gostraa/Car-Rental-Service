import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarInfoModal from 'components/CarInfoModal/CarInfoModal';
import { closeModal, openModal } from 'redux/Modal/ModalSlice';
import { LoadMore, addToFavorite } from 'redux/Advert/advertSlice';
import { getPaginationAdvertThunk } from 'redux/Advert/advertThunks';
import { BtnLearnMore, StyledList } from './CarsList.styled';

const CarsList = () => {
  const adverts = useSelector(state => state.adverts.adverts);
  const isModalOpen = useSelector(state => state.modal.isOpen);
  const [selectedId, setSelectedId] = useState(null);
  const currentPage = useSelector(state => state.adverts.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPaginationAdvertThunk(currentPage));
  }, [dispatch, currentPage]);

  const handleLoadMore = () => {
    dispatch(LoadMore(currentPage));
  };

  const handleOpenModal = id => {
    setSelectedId(id);
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleClickToFavorites = advert => {
    dispatch(addToFavorite(advert));
  };

  return (
    <>
      <StyledList>
        {adverts?.map(advert => (
          <li key={advert.id}>
            <div
              style={{
                backgroundImage: `url(${advert.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '274px',
                height: '200px',
                position: 'relative',
              }}
            >
              <button
                onClick={() => handleClickToFavorites(advert)}
                style={{
                  position: 'absolute',
                  zIndex: 10000,
                  top: '10px',
                  right: '10px',
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                to favorite
              </button>
              <img
                src={advert.img}
                alt={advert.make}
                width={274}
                height={200}
                style={{ opacity: '0' }}
              />
            </div>
            <div>
              <h2>
                {advert.make}
                {advert.model}
              </h2>
              <p>{advert.year}</p>
              <p>{advert.rentalPrice}</p>
            </div>
            <div>
              <p>{advert.address}</p>
              <p>{advert.rentalCompany}</p>
              <p>{advert.type}</p>
              <p>{advert.model}</p>
              <p>{advert.mileage}</p>
              <p>{advert.accessories[1]}</p>
            </div>
            <BtnLearnMore onClick={() => handleOpenModal(advert.id)}>
              Learn more
            </BtnLearnMore>
          </li>
        ))}
      </StyledList>
      {currentPage < 5 && <button onClick={handleLoadMore}>Load more</button>}
      {isModalOpen && (
        <CarInfoModal onClose={handleCloseModal} id={selectedId} />
      )}
    </>
  );
};

export default CarsList;
