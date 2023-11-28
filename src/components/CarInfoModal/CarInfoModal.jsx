import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { getAdvertByIdThunk } from 'redux/Advert/advertThunks';
import {
  BackDrop,
  BackgroundElem,
  BackgroundWrapper,
  Description,
  Element,
  Headers,
  InfoModal,
  ModalContainer,
  ModalImg,
  ModalSvg,
  ModalSvgWrap,
  RentalLink,
  Wrapper,
} from './CarInfoModal.styled';
import { MainWrapper } from 'components/CarsList/CarsList.styled';
import { selectCurrentAdvert } from 'helpers/selectors';

const modal = document.querySelector('#modal');

const CarInfoModal = ({ id, onClose }) => {
  const currentAdvert = useSelector(selectCurrentAdvert);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdvertByIdThunk(id));

    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'visible';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, id, onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    currentAdvert && (
      <BackDrop onClick={handleBackdropClick}>
        <ModalContainer>
          <ModalSvgWrap>
            <ModalSvg onClick={onClose} />
          </ModalSvgWrap>

          <div>
            <ModalImg src={currentAdvert.img} alt={currentAdvert.model} />
          </div>
          <div>
            <MainWrapper>
              <p>{currentAdvert.make}</p>
              <p>{currentAdvert.model}</p>

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
                const matches = element.match(/(\d+)/);

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
    ),
    modal
  );
};

export default CarInfoModal;
