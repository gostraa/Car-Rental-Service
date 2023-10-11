import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarInfoModal from 'components/CarInfoModal/CarInfoModal';
import { closeModal, openModal } from 'redux/Modal/ModalSlice';
import {
  LoadMore,
  addToFavorite,
  removeFromFavorite,
} from 'redux/Advert/advertSlice';
import { getPaginationAdvertThunk } from 'redux/Advert/advertThunks';
import { FaRegHeart } from 'react-icons/fa6';

import {
  BtnLearnMore,
  BtnLoadMore,
  InfoWrapper,
  MainWrapper,
  StyledList,
} from './CarsList.styled';
import {
  selectAdverts,
  selectCurrentPage,
  selectFavoriteAdverts,
  selectModalOpen,
} from 'helpers/selectors';
import { useLocation } from 'react-router-dom';

const CarsList = () => {
  const adverts = useSelector(selectAdverts);
  const isModalOpen = useSelector(selectModalOpen);
  const favorites = useSelector(selectFavoriteAdverts);
  const currentPage = useSelector(selectCurrentPage);
  const [selectedId, setSelectedId] = useState(null);

  const dispatch = useDispatch();

  const location = useLocation();
  console.log(location.pathname);

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
    const isAlreadyFavorite = favorites.some(fav => fav.id === advert.id);

    if (isAlreadyFavorite) {
      dispatch(removeFromFavorite(advert));
    } else {
      dispatch(addToFavorite(advert));
    }
  };

  if (location.pathname === '/favorites')
    return (
      favorites && (
        <>
          <StyledList>
            {favorites.map(advert => {
              const address = advert.address;
              const parts = address.split(', ');
              return (
                <li key={advert.id}>
                  <div
                    style={{
                      borderRadius: '12px',
                      backgroundImage: `url(${advert.img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      width: '274px',
                      height: '268px',
                      marginBottom: '14px',
                      position: 'relative',
                    }}
                  >
                    <FaRegHeart
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',

                        border: 'none',
                        color: '#3470FF',
                        cursor: 'pointer',
                        width: '23px',
                        height: '23px',
                      }}
                      onClick={() => handleClickToFavorites(advert)}
                    />
                  </div>
                  <MainWrapper>
                    <p>
                      {advert.make.length > 8
                        ? advert.make.slice(0, 8) + '...'
                        : advert.make}
                    </p>
                    <p>
                      {advert.model.length > 8
                        ? advert.model.slice(0, 8) + '...'
                        : advert.model}
                    </p>
                    <p>,{advert.year}</p>
                    <p>{advert.rentalPrice}</p>
                  </MainWrapper>
                  <InfoWrapper>
                    <p>{parts[parts.length - 2]}</p>
                    <p>{parts[parts.length - 1]}</p>
                    <p>{advert.rentalCompany}</p>
                    <p>{advert.type}</p>
                    <p>{advert.model}</p>
                    <p>{advert.mileage}</p>
                    <p>{advert.accessories[2]}</p>
                  </InfoWrapper>
                  <BtnLearnMore onClick={() => handleOpenModal(advert.id)}>
                    Learn more
                  </BtnLearnMore>
                </li>
              );
            })}
          </StyledList>
          {isModalOpen && (
            <CarInfoModal onClose={handleCloseModal} id={selectedId} />
          )}
        </>
      )
    );
  if (location.pathname === '/catalog')
    return (
      <>
        {adverts.length !== 0 ? (
          <StyledList>
            {adverts?.map(advert => {
              const address = advert.address;
              const parts = address.split(', ');
              return (
                <li key={advert.id}>
                  <div
                    style={{
                      borderRadius: '12px',
                      backgroundImage: `url(${advert.img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      width: '274px',
                      height: '268px',
                      marginBottom: '14px',
                      position: 'relative',
                    }}
                  >
                    <FaRegHeart
                      onClick={() => handleClickToFavorites(advert)}
                      style={{
                        position: 'absolute',

                        top: '10px',
                        right: '10px',
                        background: 'transparent',
                        border: 'none',
                        color: favorites.some(fav => fav.id === advert.id)
                          ? '#3470FF'
                          : 'white',
                        cursor: 'pointer',
                        width: '22px',
                        height: '22px',
                      }}
                    />
                  </div>
                  <MainWrapper>
                    <p>
                      {advert.make.length > 8
                        ? advert.make.slice(0, 8) + '...'
                        : advert.make}
                    </p>
                    <p>
                      {advert.model.length > 8
                        ? advert.model.slice(0, 8) + '...'
                        : advert.model}
                    </p>
                    <p>,{advert.year}</p>
                    <p>{advert.rentalPrice}</p>
                  </MainWrapper>
                  <InfoWrapper>
                    <p>{parts[parts.length - 2]}</p>
                    <p>{parts[parts.length - 1]}</p>
                    <p>{advert.type}</p>
                    <p>{advert.model}</p>
                    <p>{advert.mileage}</p>
                    <p>{advert.accessories[2]}</p>
                  </InfoWrapper>
                  <BtnLearnMore onClick={() => handleOpenModal(advert.id)}>
                    Learn more
                  </BtnLearnMore>
                </li>
              );
            })}
          </StyledList>
        ) : (
          <p>There's nothing here yet</p>
        )}

        {currentPage > 4 || adverts.length < 8 || (
          <BtnLoadMore onClick={handleLoadMore}>Load more</BtnLoadMore>
        )}

        {isModalOpen && (
          <CarInfoModal onClose={handleCloseModal} id={selectedId} />
        )}
      </>
    );
};

export default CarsList;
