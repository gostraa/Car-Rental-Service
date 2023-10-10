import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertByIdThunk } from 'redux/Advert/advertThunks';
import {
  BackDrop,
  BackgroundElem,
  BackgroundWrapper,
  BckgroundWrapper,
  Description,
  Element,
  Headers,
  InfoModal,
  ModalContainer,
  ModalImg,
  ModalSvg,
  RentalLink,
  Wrapper,
} from './CarInfoModal.styled';
import { MainWrapper } from 'components/CarsList/CarsList.styled';

const CarInfoModal = ({ id, onClose }) => {
  const currentAdvert = useSelector(state => state.modal.currentAdvert);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdvertByIdThunk(id));

    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, id, onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    currentAdvert && (
      <BackDrop onClick={handleBackdropClick}>
        <ModalContainer>
          <ModalSvg onClick={onClose} />

          <div>
            <ModalImg
              src={currentAdvert.img}
              alt={currentAdvert.model}
              width={465}
            />
          </div>
          <div>
            <MainWrapper>
              <p>
                {currentAdvert.make.length > 8
                  ? currentAdvert.make.slice(0, 8) + '...'
                  : currentAdvert.make}
              </p>
              <p>
                {currentAdvert.model.length > 8
                  ? currentAdvert.model.slice(0, 8) + '...'
                  : currentAdvert.model}
              </p>

              <p>,{currentAdvert.year}</p>
            </MainWrapper>
            <InfoModal>
              <p>{currentAdvert.address.split(',')[1].trim()}</p>
              <p>{currentAdvert.address.split(',')[2].trim()}</p>
              <p>id:{currentAdvert.id}</p>
              <p>Year:{currentAdvert.year}</p>
              <p>Type:{currentAdvert.type}</p>
              <p>Fuel Consumption:{currentAdvert.fuelConsumption}</p>
              <p>Engine Size:{currentAdvert.engineSize}</p>
            </InfoModal>
          </div>
          <Description>{currentAdvert.description}</Description>

          <Headers>Accessories and functionalities:</Headers>
          <Wrapper>
            {currentAdvert.accessories.map((accessory, index) => (
              <Element key={index}>{accessory}</Element>
            ))}
            {currentAdvert.functionalities.map((accessory, index) => (
              <Element key={index}>{accessory}</Element>
            ))}
          </Wrapper>

          <Headers>Rental Conditions:</Headers>
          <BackgroundWrapper>
            {currentAdvert.rentalConditions
              .split('\n')
              .map((element, index) => {
                // Используем регулярное выражение для поиска числа
                const matches = element.match(/(\d+)/);

                // Если число найдено, заменим его на число внутри <span> с цветом
                const modifiedElement = matches
                  ? element.replace(
                      matches[0],
                      `<span style="color: #3470ff">${matches[0]}</span>`
                    )
                  : element;

                return (
                  <BackgroundElem
                    key={index}
                    dangerouslySetInnerHTML={{ __html: modifiedElement }}
                  />
                );
              })}
            <BackgroundElem>
              Mileage:
              <span>{currentAdvert.mileage}</span>
            </BackgroundElem>
            <BackgroundElem>
              Price:
              <span>{currentAdvert.rentalPrice}</span>
            </BackgroundElem>
          </BackgroundWrapper>

          <RentalLink href="tel:+380730000000">Rental car</RentalLink>
        </ModalContainer>
      </BackDrop>
    )
  );
};

export default CarInfoModal;
