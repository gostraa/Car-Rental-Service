import axios from 'axios';

const instance = axios.create({
  baseURL: `https://651fda69906e276284c39eb0.mockapi.io`,
});

export const getAdverts = async () => {
  const { data } = await instance.get('/advert');
  return data;
};

export const getAdvertsById = async id => {
  const { data } = await instance.get(`/advert/${id}`);
  return data;
};
