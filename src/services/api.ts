import axios from 'axios';
import { parseCookies } from 'nookies';

const { 'debtpay.token': acessToken } = parseCookies();

export const api = axios.create({
  baseURL: 'http://localhost:4000',
});

if (acessToken) {
  api.defaults.headers['Authorization'] = `Bearer ${acessToken}`;
}
