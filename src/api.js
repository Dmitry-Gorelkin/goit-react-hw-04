import axios from 'axios';

const API_KEY = '25376419-21146ccb6c229e91e9e9974ae';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImage = async (q, page = 1, per_page = 12) => {
  const options = {
    params: {
      key: API_KEY,
      q,
      page,
      per_page,
    },
  };

  const response = await axios(options);
  return response.data;
};
