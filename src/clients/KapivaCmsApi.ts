import axios from 'axios';

const API_URL = `https://dashboard.kapiva.in/kapiva`;

const KapivaCmsApi = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  // mode: 'cors',
});

export default KapivaCmsApi;
