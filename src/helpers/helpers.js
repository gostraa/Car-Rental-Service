export const filterAdverts = (advertsArr, optionObject) => {
  const filteredAdverts = advertsArr.filter(advert => {
    const makeFilter = advert.make.includes(optionObject.make);
    const priceFilter =
      +advert.rentalPrice.slice(1, 5) <= optionObject.rentalPrice;
    const mileageFilter =
      advert.mileage >= optionObject.mileageFrom &&
      advert.mileage <= optionObject.mileageTo;

    return makeFilter && priceFilter && mileageFilter;
  });

  return filteredAdverts;
};
