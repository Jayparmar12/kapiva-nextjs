import axios from 'axios';

// STORE MANAGEMENT API'S
const API_STAGE = 'live';
const API_URL = `https://v56o3u1962.execute-api.ap-southeast-1.amazonaws.com/${API_STAGE}/`;

export const BigCommerceAPI = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
  // mode: 'cors',
});

// export default BigCommerceAPI;

// STOREFRONT APIS
const StorefrontAPI = axios.create({
  baseURL: '/api/storefront',
  timeout: 30000,
  headers: {},
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  withCredentials: true,
});

export default StorefrontAPI;
