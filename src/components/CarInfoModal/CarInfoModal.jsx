import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertByIdThunk } from 'redux/Advert/advertThunks';

const CarInfoModal = ({ id, onClose }) => {
  const currentAdvert = useSelector(state => state.modal.currentAdvert);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdvertByIdThunk(id));
  }, [dispatch, id]);
  console.log(currentAdvert);
  return (
    currentAdvert && (
      <div>
        <button onClick={onClose}>close</button>
        <div>
          <img src={currentAdvert.img} alt={currentAdvert.model} width={465} />
        </div>
        <div>
          <p>{currentAdvert.address}</p>
          <p>id:{currentAdvert.id}</p>
          <p>Year:{currentAdvert.year}</p>
          <p>Type:{currentAdvert.type}</p>
          <p>Fuel Consumption:{currentAdvert.fuelConsumption}</p>
          <p>Engine Size:{currentAdvert.engineSize}</p>
        </div>
        <p>{currentAdvert.description}</p>
        <h3>Accessories and functionalities:</h3>
        <p>{currentAdvert.accessories}</p>
        <p>{currentAdvert.functionalities}</p>
        <h3>Rental Conditions:</h3>

        {currentAdvert.rentalConditions.split('\n').map(element => {
          return <p key={element}>{element}</p>;
        })}
        <p>Mileage:{currentAdvert.mileage}</p>
        <p>Price:{currentAdvert.rentalPrice}</p>
        <a href="tel:+380730000000">Rental car</a>
      </div>
    )
  );
};

export default CarInfoModal;
