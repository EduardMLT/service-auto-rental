import axios from 'axios';

axios.defaults.baseURL = 'https://6574665df941bda3f2afb2f5.mockapi.io/api/v1/';

export const fetchHome = async () => {
  console.log('1.1 - це - axios -');
  const response = await axios.get('/data_auto');
  console.log('1.2 - це - axios -', response);
  return response.data;
};
