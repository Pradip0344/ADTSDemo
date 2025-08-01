import axios from 'axios';

const API_KEY = '7mOavazq7EM4hZfYPdHZAu5ZIlZ1W4Zw';

export const searchEvents = async (keyword, city) => {
  const response = await axios.get(
    `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&keyword=${keyword}&city=${city}`
  );
  return response.data._embedded?.events || [];
};
