import axios from 'axios';
import { parseCookies } from 'nookies';

const { 'debtpay.token': acessToken } = parseCookies();

export const api = axios.create({
  baseURL: process.env.BASE_URL,
});

if (acessToken) {
  api.defaults.headers['Authorization'] = `Bearer ${acessToken}`;
}
