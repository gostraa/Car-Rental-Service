import axios from 'axios';
const PER_PAGE = 8;

const instance = axios.create({
  baseURL: `https://651fda69906e276284c39eb0.mockapi.io`,
});

export const getPaginationAdverts = async (page = 1, limit = PER_PAGE) => {
  instance.defaults.params = {
    page,
    limit,
  };

  const { data } = await instance.get(`/advert`);
  instance.defaults.params = {};
  return data;
};

export const getAdverts = async () => {
  const { data } = await instance.get('/advert');
  return data;
};

export const getAdvertsById = async id => {
  const { data } = await instance.get(`/advert/${id}`);
  return data;
};
