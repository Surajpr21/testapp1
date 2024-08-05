import axios from 'axios';

const API_KEY = 'c916ad0f';
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (searchTerm) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        s: searchTerm,
        apikey: API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

