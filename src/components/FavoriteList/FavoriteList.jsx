import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorite } from 'redux/Advert/advertSlice';

const FavoriteList = () => {
  const favoritesAdverts = useSelector(state => state.adverts.favoriteAdverts);

  const dispatch = useDispatch();

  const handleClickDeleteFavorite = advert => {
    dispatch(removeFromFavorite(advert));
  };
  return (
    favoritesAdverts && (
      <ul>
        {favoritesAdverts.map(advert => {
          return (
            <li key={advert.id}>
              <div>
                <button onClick={() => handleClickDeleteFavorite(advert)}>
                  delete
                </button>
                <img src={advert.img} alt={advert.make} width={274} />
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
            </li>
          );
        })}
      </ul>
    )
  );
};

export default FavoriteList;
