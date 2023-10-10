import CarInfoModal from 'components/CarInfoModal/CarInfoModal';
import {
  BtnLearnMore,
  InfoWrapper,
  MainWrapper,
  StyledList,
} from 'components/CarsList/CarsList.styled';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorite } from 'redux/Advert/advertSlice';
import { closeModal, openModal } from 'redux/Modal/ModalSlice';
import { FaRegHeart } from 'react-icons/fa6';
import { selectFavoriteAdverts, selectModalOpen } from 'helpers/selectors';

const FavoriteList = () => {
  const favoritesAdverts = useSelector(selectFavoriteAdverts);
  const isModalOpen = useSelector(selectModalOpen);
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();

  const handleClickDeleteFavorite = advert => {
    dispatch(removeFromFavorite(advert));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleOpenModal = id => {
    setSelectedId(id);
    dispatch(openModal());
  };

  return (
    favoritesAdverts && (
      <>
        {' '}
        <StyledList>
          {favoritesAdverts.map(advert => {
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
                      zIndex: 10000,
                      top: '10px',
                      right: '10px',

                      border: 'none',
                      color: '#3470FF',
                      cursor: 'pointer',
                      width: '23px',
                      height: '23px',
                    }}
                    onClick={() => handleClickDeleteFavorite(advert)}
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
};

export default FavoriteList;
