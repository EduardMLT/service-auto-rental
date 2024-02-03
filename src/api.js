import axios from 'axios';

axios.defaults.baseURL = 'https://6574665df941bda3f2afb2f5.mockapi.io/api/v1/';

export const fetchHome = async (page = 1, perPage = 4) => {
  try {
    const response = await axios.get('/data-auto');
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const currentItems = response.data.slice(startIndex, endIndex);
    return currentItems;
  } catch (error) {
    console.error('Помилка при отриманні даних:', error);
    throw error;
  }
};